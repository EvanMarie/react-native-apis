import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import Ionicons from "@expo/vector-icons/Ionicons";
import { col } from "@/constants/Colors";
import { boxShadows } from "@/constants/ShadowStyles";
import { borders } from "@/constants/BorderStyles";

interface ToggleSwitchProps {
  size?: "sm" | "md" | "lg";
  labelOn?: string;
  labelOff?: string;
  toggleOn: boolean;
  setToggleOn: React.Dispatch<React.SetStateAction<boolean>>;
  switchColor?: string;
  containerColor?: string;
  onIcon?: keyof typeof Ionicons.glyphMap;
  offIcon?: keyof typeof Ionicons.glyphMap;
  onText?: string;
  offText?: string;
  labelColor?: string;
}

export default function ToggleSwitch({
  size = "lg",
  labelOn,
  labelOff,
  toggleOn,
  setToggleOn,
  switchColor = col[800],
  containerColor = col[500],
  onIcon,
  offIcon,
  onText,
  offText,
  labelColor = col[100],
}: ToggleSwitchProps) {
  const sizes = {
    sm: { container: 50, switch: 20, text: 12, icon: 15, gap: 3 },
    md: { container: 60, switch: 25, text: 15, icon: 20, gap: 4 },
    lg: { container: 70, switch: 30, text: 18, icon: 25, gap: 5 },
  };

  const currentSize = sizes[size];

  const animatedValue = useSharedValue(toggleOn ? 1 : 0);

  const toggleSwitch = () => {
    setToggleOn(!toggleOn);
    animatedValue.value = withSpring(toggleOn ? 0 : 1, {
      stiffness: 800,
      damping: 33,
    });
  };

  const switchStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX:
          animatedValue.value *
          (currentSize.container - currentSize.switch - 4),
      },
    ],
  }));

  return (
    <View style={{ alignItems: "center" }}>
      {labelOn && labelOff && (
        <Text style={{ fontSize: currentSize.text, color: labelColor }}>
          {toggleOn ? labelOn : labelOff}
        </Text>
      )}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: currentSize.gap,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 3,
            opacity: toggleOn ? 0.5 : 1,
          }}
        >
          {offIcon ? (
            <Ionicons
              name={offIcon}
              size={currentSize.icon}
              color={labelColor}
            />
          ) : offText ? (
            <Text style={{ fontSize: currentSize.text, color: labelColor }}>
              {offText}
            </Text>
          ) : null}
        </View>
        <TouchableOpacity
          style={[
            styles.switchContainer,
            boxShadows.md,
            borders.borderSm900,
            {
              width: currentSize.container,
              borderRadius: currentSize.switch / 1.5,
              backgroundColor: containerColor,
            },
          ]}
          onPress={toggleSwitch}
        >
          <Animated.View
            style={[
              styles.switch,
              boxShadows.sm,
              borders.borderSm900,
              {
                width: currentSize.switch,
                height: currentSize.switch,
                borderRadius: currentSize.switch / 2,
                backgroundColor: switchColor,
              },
              switchStyle,
            ]}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 3,
            opacity: toggleOn ? 1 : 0.5,
          }}
        >
          {onIcon ? (
            <Ionicons
              name={onIcon}
              size={currentSize.icon}
              color={labelColor}
            />
          ) : onText ? (
            <Text style={{ fontSize: currentSize.text, color: labelColor }}>
              {onText}
            </Text>
          ) : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    justifyContent: "center",
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
  switch: {
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: { width: 1, height: 1 },
  },
});
