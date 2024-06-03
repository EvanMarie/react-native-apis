import { ImageStyle } from "expo-image";
import { Image, ImageSourcePropType, StyleProp } from "react-native";
import { Box, CenterHorizontalFull } from "./containers";
import { borders } from "@/constants/BorderStyles";
import { boxShadows } from "@/constants/ShadowStyles";
import { col } from "@/constants/Colors";
import { useState } from "react";
import CustomIconButton from "./iconButton";
import CustomModal from "./modal";
import CustomImage from "./image";
import { screenWidth } from "@/constants/variousConstants";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomButton from "./button";

export default function ImageWithModal({
  source,
  style,
  width = 300,
  height = 300,
  objectFit = "cover",
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
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <TouchableOpacity
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
        onPress={() => {
          setIsExpanded(true);
        }}
      >
        <Box style={{ position: "absolute", top: 5, right: 5, zIndex: 1 }}>
          <CustomIconButton
            onPress={() => {
              setIsExpanded(!isExpanded);
            }}
            iconName="chevron-expand-outline"
            size={16}
            padding={3}
          />
        </Box>
        <Image
          source={source}
          style={{
            width: "100%",
            height: "100%",
            objectFit: objectFit,
            borderRadius: useDecorations ? borderRadius : 0,
          }}
        />
      </TouchableOpacity>
      <CustomModal
        isVisible={isExpanded}
        animationTime={500}
        setIsVisible={() => setIsExpanded(false)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box style={{ position: "relative" }}>
          <Box
            style={{
              position: "absolute",
              right: screenWidth * 0.5 - 60,
              bottom: -50,
              zIndex: 1,
            }}
          >
            <CustomButton
              onPress={() => setIsExpanded(false)}
              icon="close"
              text="close"
            />
          </Box>
          <CustomImage
            source={source}
            width={screenWidth * 0.98}
            border={borders.borderXs800}
            objectFit="cover"
            style={{
              minHeight: screenWidth * 0.98,
              maxHeight: screenWidth * 0.98,
            }}
          />
        </Box>
      </CustomModal>
    </>
  );
}
