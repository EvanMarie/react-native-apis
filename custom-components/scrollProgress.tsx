import React, { useRef, useState } from "react";
import { View, ScrollView, Animated, StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "@/constants/variousConstants";
import { col } from "@/constants/Colors";
import { VStackFull } from "./containers";
import { bordersB } from "@/constants/BorderStyles";

export default function ScrollProgress({
  children,
  position = "absolute",
  top,
  right,
  left,
  bottom,
  color = col[600],
  style = {},
  paddingTop = 50,
  height = screenHeight * 0.88,
  progressBackground = col[200],
  progressWidth = screenWidth,
  progressHeight = 5,
  progressBorderRadius = 0,
  contentPaddingVertical = 10,
  contentPaddingHorizontal = 10,
  borderBottom = bordersB.borderBmd400,
}: {
  children: React.ReactNode;
  position?: "absolute" | "relative";
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
  color?: string;
  style?: object;
  paddingTop?: number;
  height?: number;
  progressBackground?: string;
  progressWidth?: number;
  progressHeight?: number;
  progressBorderRadius?: number;
  contentPaddingVertical?: number;
  contentPaddingHorizontal?: number;
  borderBottom?: any;
}) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [contentHeight, setContentHeight] = useState(0);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: "relative",
      paddingTop: paddingTop,
    },
    scrollContainer: {
      flexDirection: "column",
    },
    progressContainer: {
      height: 5,
      backgroundColor: progressBackground,
      width: screenWidth,
      zIndex: 1,
    },
    progressBar: {
      height: progressHeight,
      width: progressWidth,
      backgroundColor: color,
      position: position,
      top: top,
      left: left,
      right: right,
      bottom: bottom,
      borderRadius: progressBorderRadius,
    },
  });

  return (
    <View style={(styles.container, style)}>
      <View style={styles.progressContainer}>
        {contentHeight > height && (
          <Animated.View
            style={[
              styles.progressBar,
              {
                width: scrollY.interpolate({
                  inputRange: [0, contentHeight - height],
                  outputRange: [0, screenWidth],
                  extrapolate: "clamp",
                }),
              },
            ]}
          />
        )}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContainer}
        onContentSizeChange={(width, height) => setContentHeight(height)}
        style={[borderBottom, { height: height }]}
      >
        <VStackFull
          style={{
            gap: 10,
            paddingVertical: contentPaddingVertical,
            paddingHorizontal: contentPaddingHorizontal,
          }}
        >
          {children}
        </VStackFull>
      </ScrollView>
    </View>
  );
}
