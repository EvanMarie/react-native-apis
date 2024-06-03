import { col } from "@/constants/Colors";
import { screenWidth } from "@/constants/variousConstants";
import { View } from "react-native";

export default function Divider({
  height = 1,
  width = screenWidth * 0.95,
  color = col[550],
  margin,
  paddingTop,
  paddingBottom,
  border,
  borderRadius,
  style,
  ...props
}: {
  height?: number;
  width?: string | number;
  color?: string;
  margin?: number;
  paddingTop?: number;
  paddingBottom?: number;
  border?: number;
  borderRadius?: number;
  style?: any;
  [key: string]: any;
}) {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <View
        style={[
          border,
          {
            height: height,
            width: width,
            backgroundColor: color,
            margin: margin,
            paddingTop: paddingTop,
            paddingBottom: paddingBottom,
            borderRadius: borderRadius,
          },
          style,
        ]}
        {...props}
      />
    </View>
  );
}
