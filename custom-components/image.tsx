import { ImageStyle } from "expo-image";
import { Image, ImageSourcePropType, StyleProp } from "react-native";
import { Box } from "./containers";
import { borders } from "@/constants/BorderStyles";
import { boxShadows } from "@/constants/ShadowStyles";
import { col } from "@/constants/Colors";

export default function CustomImage({
  source,
  style,
  width = 300,
  height = 300,
  objectFit = "contain",
  borderRadius = 20,
  border = borders.borderMd800,
  boxShadow = boxShadows.glowMd900,
  useDecorations = true,
}: {
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  width?: number | "100%";
  height?: number;
  objectFit?: "cover" | "contain";
  borderRadius?: number;
  border?: StyleProp<ImageStyle> | undefined;
  boxShadow?: StyleProp<ImageStyle>;
  useDecorations?: boolean;
}) {
  return (
    <Box
      style={[
        useDecorations ? boxShadow : undefined,
        useDecorations ? border : undefined,
        style,
        {
          position: "relative",
          width: width,
          height: height,
          backgroundColor: useDecorations ? col[950] : "transparent",
          borderRadius: useDecorations ? borderRadius : 0,
        },
      ]}
    >
      <Image
        source={source}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          minWidth: "100%",
          minHeight: "100%",
          height: "100%",
          objectFit: objectFit,
          borderRadius: useDecorations ? borderRadius : 0,
        }}
      />
    </Box>
  );
}
