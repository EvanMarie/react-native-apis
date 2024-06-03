import React, { useState, useEffect, useRef } from "react";
import { Animated } from "react-native";

export function ShiftingComponents({
  components,
  delaySeconds = 6,
  animationDuration = 1000,
  animationType = "fade-slide",
}: {
  components: React.ReactNode[];
  delaySeconds?: number;
  animationDuration?: number;
  animationType?: "fade" | "slide" | "fade-slide" | "fade-scale";
}) {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-500)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    slideAnim.setValue(-500); // reset the slide animation
    scaleAnim.setValue(0.8); // reset the scale animation

    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: animationDuration,
          useNativeDriver: true,
        }),
        Animated.timing(
          animationType === "fade-slide" ? slideAnim : scaleAnim,
          {
            toValue: 0,
            duration: animationDuration,
            useNativeDriver: true,
          }
        ),
      ]),
      Animated.delay(delaySeconds * 1000),
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: animationDuration,
          useNativeDriver: true,
        }),
        Animated.timing(
          animationType === "fade-slide" ? slideAnim : scaleAnim,
          {
            toValue: animationType === "fade-slide" ? 500 : 0.8,
            duration: animationDuration,
            useNativeDriver: true,
          }
        ),
      ]),
    ]).start(() => {
      setCurrentComponentIndex(
        (prevIndex) => (prevIndex + 1) % components.length
      );
    });
  }, [
    components.length,
    delaySeconds,
    fadeAnim,
    currentComponentIndex,
    slideAnim,
    scaleAnim,
  ]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [
          { translateX: animationType === "fade-slide" ? slideAnim : 0 },
          { scale: animationType === "fade-scale" ? scaleAnim : 1 },
        ],
      }}
    >
      {components[currentComponentIndex]}
    </Animated.View>
  );
}
