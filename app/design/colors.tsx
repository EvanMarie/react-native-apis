import { GradientFive, GradientSeven } from "@/constants/Gradients";

import { VStackFull } from "@/custom-components/containers";
import {
  ThemeColors,
  ThemeGradients,
} from "@/custom-components/designExamples/themeAndColors";
import Divider from "@/custom-components/divider";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Design() {
  return (
    <GradientSeven style={{ display: "flex", flex: 1 }}>
      <ScrollView>
        <SafeAreaView style={{ width: "100%" }}>
          <VStackFull style={{ gap: 20, paddingTop: 10, paddingBottom: 55 }}>
            <ThemeColors />
            <Divider />
            <ThemeGradients />
          </VStackFull>
        </SafeAreaView>
      </ScrollView>
    </GradientSeven>
  );
}
