import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { borders } from "@/constants/BorderStyles";
import { boxShadows } from "@/constants/ShadowStyles";
import { screenWidth } from "@/constants/variousConstants";

const AnimatedImage = Animated.createAnimatedComponent(Image);

interface ExpandableImageProps {
  image: string;
  initialSize?: number;
  expandedSize?: number;
  duration?: number;
}

export default function ExpandableImage({
  image,
  initialSize = 100,
  expandedSize = screenWidth * 0.95,
  duration = 400,
}: ExpandableImageProps) {
  const [expanded, setExpanded] = useState(false);
  const imageSizeAnim = useSharedValue(initialSize);

  const toggleImageSize = () => {
    setExpanded((prev) => !prev);
    imageSizeAnim.value = withTiming(expanded ? initialSize : expandedSize, {
      duration: duration,
    });
  };

  const imageStyle = useAnimatedStyle(() => ({
    width: imageSizeAnim.value,
    height: imageSizeAnim.value,
    borderRadius: imageSizeAnim.value / 2,
  }));

  return (
    <TouchableOpacity onPress={toggleImageSize}>
      <AnimatedImage
        style={[imageStyle, styles.image, borders.borderXs400, boxShadows.lg]}
        source={image as any}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    overflow: "hidden",
  },
});
