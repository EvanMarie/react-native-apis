import React, { useEffect } from "react";
import { View } from "react-native";
import { Circle, Svg } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { col } from "@/constants/Colors";
import { screenHeight } from "@/constants/variousConstants";

type FlowerOfLifeProps = {
  style?: object;
  duration?: number;
  minOpacity?: number;
  maxOpacity?: number;
  height?: number;
};

export default function FlowerOfLifeOnScroll({
  style = {},
  duration = 4000,
  minOpacity = 0.3,
  maxOpacity = 0.8,
  height = screenHeight,
}: FlowerOfLifeProps) {
  const radius = 23;
  const centerX = 55;
  const centerY = 55;
  const encompassingRadius = 2 * radius;

  const smallCircleColor = col[500];
  const largerCircleColor = col[500];
  // const largerCircleColor = col[600];

  const opacityValues = Array.from({ length: 6 }, () =>
    useSharedValue(maxOpacity)
  );

  useEffect(() => {
    opacityValues.forEach((opacity, index) => {
      opacity.value = withRepeat(
        withTiming(minOpacity + Math.random() * (maxOpacity - minOpacity), {
          duration: duration + index * 500,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        true
      );
    });
  }, [duration, minOpacity, maxOpacity]);

  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  return (
    <View
      style={[
        {
          alignItems: "center",
          justifyContent: "center",
          height: height,
          width: "100%",
        },
        style,
      ]}
    >
      <Svg viewBox="0 0 110 110" width="100%" height="100%">
        {/* Large Encompassing Circle */}
        <Circle
          cx={centerX}
          cy={centerY}
          r={encompassingRadius}
          fill="none"
          stroke={largerCircleColor}
          strokeWidth="0.5"
        />

        {/* Central Circle */}
        <Circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke={smallCircleColor}
          strokeWidth="0.5"
        />

        {/* Surrounding Circles */}
        {[0, 60, 120, 180, 240, 300].map((angle, index) => {
          const animatedProps = useAnimatedProps(() => ({
            opacity: opacityValues[index].value,
          }));

          return (
            <AnimatedCircle
              key={index}
              cx={centerX + Math.cos((angle * Math.PI) / 180) * radius}
              cy={centerY + Math.sin((angle * Math.PI) / 180) * radius}
              r={radius}
              fill="none"
              stroke={smallCircleColor}
              strokeWidth="0.6"
              animatedProps={animatedProps}
            />
          );
        })}
      </Svg>
    </View>
  );
}
