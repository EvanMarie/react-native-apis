import { defaultImage } from "@/assets/imageExports";
import { GradientSix } from "@/constants/Gradients";
import { VStackFull, FlexFull } from "@/custom-components/containers";
import CustomLinkButton from "@/custom-components/linkButton";
import { TextLg } from "@/custom-components/textComponents";
import { ImageBackground, StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <FlexFull style={styles.container}>
      <GradientSix
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <VStackFull style={{ alignItems: "center" }}>
          <ImageBackground source={defaultImage} />
          <TextLg>I think you might be lost...</TextLg>
          <CustomLinkButton text="go to home screen" pathname="/" />
        </VStackFull>
      </GradientSix>
    </FlexFull>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
