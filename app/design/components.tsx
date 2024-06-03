import { GradientEight, GradientFive } from "@/constants/Gradients";
import {
  AlertExample,
  BottomSheetExample,
  BouncingDotsExample,
  ButtonExamples,
  CustomExpandableImageExample,
  CustomExpandableTextExample,
  CustomImageBackgroundExample,
  ExpandableImageExample,
  HorizontalPageSwipingExample,
  ImageWithModalExample,
  ModalExample,
  SegmentedButtonBarExample,
  ShiftingComponentsExample,
  ShiftingImagesExample,
  ToggleSwitchesExample,
  VerticalPageSwipingExample,
} from "@/custom-components/designExamples/componentExamples";
import { VStackFull } from "@/custom-components/containers";
import Divider from "@/custom-components/divider";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DesignComponents() {
  return (
    <GradientEight style={{ display: "flex", flex: 1 }}>
      <ScrollView>
        <SafeAreaView style={{ width: "100%" }}>
          <VStackFull style={{ gap: 20, paddingTop: 10, paddingBottom: 55 }}>
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
            <BouncingDotsExample />
            <Divider />
            <ShiftingImagesExample />
            <Divider />
            <ShiftingComponentsExample />
            <Divider />
            <SegmentedButtonBarExample />
            <Divider />
            <BottomSheetExample />
          </VStackFull>
        </SafeAreaView>
      </ScrollView>
    </GradientEight>
  );
}
