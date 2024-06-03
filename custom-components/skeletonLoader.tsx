import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import * as Animatable from "react-native-animatable";
import Svg, {
  Polygon,
  Rect,
  Defs,
  ClipPath,
  Stop,
  LinearGradient,
} from "react-native-svg";
import { col } from "@/constants/Colors";
import { screenHeight } from "@/constants/variousConstants";

interface SkeletonLoaderProps {
  shape?:
    | "rectangle"
    | "circle"
    | "triangle"
    | "diamond"
    | "octagon"
    | "invertedTriangle";
  containerStyle?: ViewStyle;
  colors?: string[];
  speed?: number;
  text?: string;
  textColor?: string;
  textStyle?: TextStyle;
  component?: React.ReactNode;
  bottomPosition?: number;
}

const halfScreenHeight = screenHeight / 2;

export default function SkeletonLoader({
  shape = "rectangle",
  containerStyle,
  colors = [col[500], col[600], col[700]],
  speed = 5000,
  text,
  textColor = "#00FFFF",
  textStyle,
  component,
  bottomPosition = halfScreenHeight,
}: SkeletonLoaderProps) {
  const renderShape = () => {
    switch (shape) {
      case "rectangle":
        return <Rect width="100%" height="100%" />;
      case "circle":
        const radius = "50%";
        return <Rect width="100%" height="50%" rx={radius} ry={radius} />;
      case "triangle":
        return <Polygon points="50,15 100,100 0,100" />;
      case "invertedTriangle":
        return <Polygon points="0,0 100,0 50,100" />;
      case "diamond":
        return <Polygon points="50,0 100,50 50,100 0,50" />;
      case "octagon":
        return (
          <Polygon points="30,10 70,10 90,30 90,70 70,90 30,90 10,70 10,30" />
        );
      default:
        return <Rect width="100%" height="100%" />;
    }
  };

  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      zIndex: -1,
      backgroundColor: col[500],
    },
    animatedView: {
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      width: "100%",
      position: "absolute",
      bottom: bottomPosition,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: 20,
      fontWeight: "bold",
    },
  });

  return (
    <View style={[styles.container, containerStyle]}>
      <Animatable.View
        animation={{
          0: { opacity: 1 },
          0.5: { opacity: 0.7 },
          1: { opacity: 1 },
        }}
        duration={speed}
        iterationCount="infinite"
        style={[
          styles.animatedView,
          {
            width: "100%",
            height: "100%",
          },
        ]}
      >
        <Svg width="100%" height="100%">
          <Defs>
            <ClipPath id="clipPath">{renderShape()}</ClipPath>

            <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              {colors.map((color, index) => (
                <Stop
                  key={index}
                  offset={`${(index * 100) / (colors.length - 1)}%`}
                  stopColor={color}
                />
              ))}
            </LinearGradient>
          </Defs>
          <Rect
            width="100%"
            height="100%"
            fill="url(#grad)"
            clipPath="url(#clipPath)"
          />
        </Svg>
        <View style={styles.content}>
          {text && (
            <Text style={[styles.text, { color: textColor }, textStyle]}>
              {text}
            </Text>
          )}
          {component && component}
        </View>
      </Animatable.View>
    </View>
  );
}
