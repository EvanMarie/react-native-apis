import { borders } from "@/constants/BorderStyles";
import { StyleProp, ViewStyle, Image } from "react-native";

export default function ImageIconCard({
  imageLink,
  width = 175,
  height = 175,
  borderRadius = 13,
  border = borders.borderXs200,
  style,
}: {
  imageLink: any;
  width?: number;
  height?: number;
  borderRadius?: number;
  border?: any;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <Image
      source={imageLink}
      style={[
        {
          width: width,
          height: height,
          borderRadius: borderRadius,
        },
        border,
        style,
      ]}
    />
  );
}
