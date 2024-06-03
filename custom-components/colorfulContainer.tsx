import { LinearGradient } from "expo-linear-gradient";
import { CenterHorizontalFull, VStackFull } from "./containers";
import { col } from "@/constants/Colors";
import { borders } from "@/constants/BorderStyles";
import { boxShadows } from "@/constants/ShadowStyles";

export default function ColorfulContainer({
  children,
  colors = [col[770], col[640], col[870]],
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
          borders.borderSm500,
          boxShadows.glowLg900,
          { backgroundColor: col[800], borderRadius: 13 },
        ]}
      >
        <LinearGradient
          colors={colors}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={[
            style,
            borders.borderSm500,
            { width: "100%", padding: padding, borderRadius: 13 },
          ]}
        >
          <VStackFull
            style={{
              alignItems: "center",
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            {children}
          </VStackFull>
        </LinearGradient>
      </CenterHorizontalFull>
    </CenterHorizontalFull>
  );
}
