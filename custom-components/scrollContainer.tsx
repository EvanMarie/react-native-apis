import Animated, { useAnimatedRef } from "react-native-reanimated";
import { StyleSheet } from "react-native";
import { MyComponentView } from "./componentView";
import { SafeAreaView } from "react-native-safe-area-context";
import { col } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

export default function ScrollContainer({
  children,
  gradientColorArray = [col[500], col[600]],
}: {
  children: React.ReactNode;
  gradientColorArray?: string[];
}) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: "relative",
      height: "100%",
    },
    content: {
      flex: 1,
      padding: 20,
    },
  });

  return (
    <MyComponentView style={styles.container}>
      <LinearGradient
        colors={gradientColorArray}
        style={{ height: "100%" }}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
          <SafeAreaView style={[styles.content]}>{children}</SafeAreaView>
        </Animated.ScrollView>
      </LinearGradient>
    </MyComponentView>
  );
}
