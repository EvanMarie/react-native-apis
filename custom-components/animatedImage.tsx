import { ImageStyle } from "expo-image";
import { Image, ImageSourcePropType, StyleProp } from "react-native";
import Animated from "react-native-reanimated";
import { borders } from "@/constants/BorderStyles";
import { boxShadows } from "@/constants/ShadowStyles";

export default function AnimatedImage({
  source,
  style,
  width = 300,
  height = 300,
  resizeMode = "contain",
  borderRadius = 20,
  border = borders.borderSm800,
  boxShadow = boxShadows.glowSm900,
}: {
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  width?: number;
  height?: number;
  resizeMode?: "cover" | "contain";
  borderRadius?: number;
  border?: StyleProp<ImageStyle>;
  boxShadow?: StyleProp<ImageStyle>;
}) {
  return (
    <Animated.Image
      source={source}
      style={[
        {
          width: width,
          height: height,
          borderRadius: borderRadius,
          resizeMode: resizeMode,
        },
        border,
        boxShadow,
        style,
      ]}
    />
  );
}
