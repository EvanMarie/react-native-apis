import { fullCenteredFlex } from "@/constants/variousConstants";
import { VStackFull } from "@/custom-components/containers";

import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AlertExample,
  BottomSheetExample,
  ButtonExamples,
  CustomExpandableImageExample,
  CustomExpandableTextExample,
  CustomImageBackgroundExample,
  ExpandableImageExample,
  HorizontalPageSwipingExample,
  ImageWithModalExample,
  ModalExample,
  SegmentedButtonBarExample,
  ToggleSwitchesExample,
  VerticalPageSwipingExample,
} from "./componentExamples";

import { ThemeColors, ThemeGradients } from "./themeAndColors";
import Divider from "@/custom-components/divider";
import { col } from "@/constants/Colors";

export default function AllComponentExamples() {
  return (
    <ScrollView style={{ width: "100%", display: "flex", flex: 1 }}>
      <LinearGradient colors={[col[900], col[800]]} style={fullCenteredFlex}>
        <SafeAreaView style={{ width: "100%" }}>
          <VStackFull style={{ gap: 20 }}>
            <ThemeColors />
            <Divider />
            <ThemeGradients />
            <Divider />
            <ButtonExamples />
            <Divider />
            <ToggleSwitchesExample />
            <Divider />
            <ModalExample />
            <Divider />
            <AlertExample />
            <Divider />
            <HorizontalPageSwipingExample />
            <Divider />
            <VerticalPageSwipingExample />
            <Divider />
            <CustomExpandableTextExample />
            <Divider />
            <CustomExpandableImageExample />
            <Divider />
            <ImageWithModalExample />
            <Divider />
            <ExpandableImageExample />
            <Divider />
            <CustomImageBackgroundExample />
            <Divider />
            <SegmentedButtonBarExample />
            <Divider />
            <BottomSheetExample />
          </VStackFull>
        </SafeAreaView>
      </LinearGradient>
    </ScrollView>
  );
}
