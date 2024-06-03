import React, { useRef, useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import { screenHeight } from "@/constants/variousConstants";
import { col } from "@/constants/Colors";
import { boxShadows } from "@/constants/ShadowStyles";
import { boldAccentFont } from "@/constants/FontVariables";

export default function BottomSheet({
  children,
  borderRadius = 20,
  bg = col[500],
  width = "100%",
  headerHeight = 30,
  buttonTextSize = 15,
  buttonTextColor = col[900],
  right = 0,
  left = 0,
  headerBorderColor = col[900],
  headerBorderWidth = 1.5,
  openText = "Open",
  closeText = "Close",
  textStyle = {},
  headerFontFamily = boldAccentFont,
  height = screenHeight / 4,
  shadow = boxShadows.glowSm600,
}: {
  children?: React.ReactNode;
  borderRadius?: number;
  bg?: string;
  width?: "100%" | number;
  headerHeight?: number;
  headerBorderColor?: string;
  buttonTextSize?: number;
  buttonTextColor?: string;
  right?: number;
  left?: number;
  headerBorderWidth?: number;
  openText?: string;
  closeText?: string;
  textStyle?: {};
  headerFontFamily?: string;
  height?: number;
  shadow?: any;
}) {
  const translateY = useSharedValue(screenHeight); // Initialize as closed
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const context = useRef({ y: 0 });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const openBottomSheet = () => {
    translateY.value = withSpring(screenHeight - height);
    setIsBottomSheetOpen(true);
  };

  const closeBottomSheet = () => {
    translateY.value = withSpring(screenHeight);
    setIsBottomSheetOpen(false);
  };

  const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
    translateY.value = event.nativeEvent.translationY + context.current.y;
    if (translateY.value > screenHeight) {
      translateY.value = screenHeight;
    } else if (translateY.value < screenHeight - height) {
      translateY.value = screenHeight - height;
    }
  };

  const onHandlerStateChange = (event: PanGestureHandlerGestureEvent) => {
    if (event.nativeEvent.state === 5) {
      context.current = { y: translateY.value };
      if (translateY.value > screenHeight - height / 2) {
        closeBottomSheet();
      } else {
        openBottomSheet();
      }
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    bottomSheet: {
      position: "absolute",
      width: width,
      height: screenHeight,
      backgroundColor: bg,
      borderTopLeftRadius: borderRadius,
      borderTopRightRadius: borderRadius,
      bottom: 0,
      right: right,
      left: left,
    },
    header: {
      height: headerHeight,
      justifyContent: "center",
      alignItems: "center",
      borderBottomWidth: headerBorderWidth,
      borderBottomColor: headerBorderColor,
    },
    buttonText: {
      fontSize: buttonTextSize,
      color: buttonTextColor,
      fontFamily: headerFontFamily,
    },
    content: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "flex-start",
      height: height,
    },
  });

  return (
    <View style={[shadow, styles.container]}>
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <Animated.View style={[styles.bottomSheet, animatedStyle]}>
          <View style={styles.header}>
            {isBottomSheetOpen ? (
              <TouchableOpacity
                onPress={closeBottomSheet}
                style={{
                  width: "100%",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <Text style={styles.buttonText}>{closeText}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={openBottomSheet}
                style={{
                  width: "100%",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <Text style={[styles.buttonText, textStyle]}>{openText}</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.content}>{children}</View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}
