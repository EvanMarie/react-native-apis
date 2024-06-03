import { col } from "@/constants/Colors";
import { boxShadows } from "@/constants/ShadowStyles";
import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
  withDelay,
  interpolate,
} from "react-native-reanimated";

interface BouncingDotsProps {
  color?: string;
  dotSize?: number;
  dotCount?: number;
  speed?: number; // duration in milliseconds
  dotGap?: number;
}

const BouncingDots: React.FC<BouncingDotsProps> = ({
  color = col[300],
  dotSize = 10,
  dotCount = 5,
  dotGap = 10,
  speed = 2000,
}) => {
  const dots = Array.from({ length: dotCount });
  const animations = dots.map((_, index) => useSharedValue(0));

  animations.forEach((animation, index) => {
    animation.value = withDelay(
      (speed / dotCount) * index,
      withRepeat(
        withTiming(1, {
          duration: speed,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        true
      )
    );
  });

  const animatedStyles = animations.map((animation) =>
    useAnimatedStyle(() => {
      return {
        transform: [
          {
            scale: interpolate(animation.value, [0, 1], [0, 1]),
          },
          {
            translateX: interpolate(animation.value, [0, 1], [20, 0]),
          },
        ],
      };
    })
  );

  const styles = StyleSheet.create({
    container: {
      gap: dotGap,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    dot: {
      margin: 6,
      borderRadius: 50,
      elevation: 3,
    },
  });

  return (
    <View style={styles.container}>
      {dots.map((_, index) => (
        <Animated.View
          key={index}
          style={[
            styles.dot,
            boxShadows.sm,
            { backgroundColor: color, width: dotSize, height: dotSize },
            animatedStyles[index],
          ]}
        />
      ))}
    </View>
  );
};

export default BouncingDots;
