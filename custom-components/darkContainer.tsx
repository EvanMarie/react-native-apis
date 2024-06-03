import { LinearGradient } from "expo-linear-gradient";
import VStackFullWidth, { CenterHorizontalFull } from "./containers";
import { col } from "@/constants/Colors";
import { borders } from "@/constants/BorderStyles";
import { boxShadows } from "@/constants/ShadowStyles";

export default function DarkContainer({
  children,
  colors = [col[900], col[950], col[900]],
  padding = 5,
  style,
}: {
  children: React.ReactNode;
  colors?: string[];
  padding?: number;
  style?: any;
}) {
  return (
    <CenterHorizontalFull style={{ padding: padding }}>
      <CenterHorizontalFull
        style={[
          borders.borderSm700,
          boxShadows.glowLg900,
          { backgroundColor: col[800], borderRadius: 13 },
        ]}
      >
        <LinearGradient
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          colors={colors}
          style={[
            style,
            borders.borderSm500,
            { width: "100%", padding: padding, borderRadius: 13 },
          ]}
        >
          <VStackFullWidth
            style={{
              alignItems: "center",
              paddingHorizontal: 10,
              paddingVertical: 5,
              gap: 10,
            }}
          >
            {children}
          </VStackFullWidth>
        </LinearGradient>
      </CenterHorizontalFull>
    </CenterHorizontalFull>
  );
}
