import { defaultImage } from "@/assets/imageExports";
import { col } from "@/constants/Colors";
import { boldAccentFont } from "@/constants/FontVariables";
import { textShadows } from "@/constants/ShadowStyles";
import { screenHeight, screenWidth } from "@/constants/variousConstants";
import { VStack } from "@/custom-components/containers";
import MyImageBackground from "@/custom-components/imageBackground";
import { Heading3xl, Heading4xl } from "@/custom-components/textComponents";
import { LinearGradient } from "expo-linear-gradient";

export default function Design() {
  return (
    <MyImageBackground
      image={defaultImage}
      style={{ height: screenHeight }}
      blur={4}
      borderRadius={0}
    >
      <LinearGradient
        colors={[col[220], col[320]]}
        style={{
          width: screenWidth,
          height: screenHeight,
          display: "flex",
          flexDirection: "row",
          flex: 1,
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <VStack>
          <Heading4xl
            style={{ textAlign: "center" }}
            textColor={col[900]}
            textShadow={textShadows.glow100Lg}
            fontFamily={boldAccentFont}
          >
            React Native / Expo
          </Heading4xl>
          <Heading3xl
            style={{ textAlign: "center" }}
            textColor={col[900]}
            textShadow={textShadows.glow100Lg}
            fontFamily={boldAccentFont}
          >
            Design Template
          </Heading3xl>
        </VStack>
      </LinearGradient>
    </MyImageBackground>
  );
}
