import { View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { col } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

export type ThemedViewProps = ViewProps & {
  gradientColors?: string[];
};

export function MyComponentView({
  style,
  gradientColors = [col[800], col[700]],
  ...otherProps
}: ThemedViewProps) {
  return (
    <LinearGradient
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      colors={gradientColors}
      style={[{ backgroundColor: col[800] }, style]}
      {...otherProps}
    />
  );
}
