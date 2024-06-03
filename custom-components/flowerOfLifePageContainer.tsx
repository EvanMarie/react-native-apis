import { col } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import FlowerOfLifeOnScroll from "./flowerOfLife";

export default function FlowerOfLifeContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <View
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        flex: 1,
        backgroundColor: col[800],
      }}
    >
      <LinearGradient
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        colors={[col[540], col[640]]}
        style={{
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            flex: 1,
            position: "absolute",
            zIndex: 1,
          }}
        >
          <FlowerOfLifeOnScroll />
        </View>
        <LinearGradient
          colors={[col[950], col[850]]}
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            flex: 1,
            position: "absolute",
            zIndex: 4,
          }}
        >
          {children}
        </LinearGradient>
      </LinearGradient>
    </View>
  );
}
