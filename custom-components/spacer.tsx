import { Text, View } from "react-native";

export default function Spacer({
  height = 20,
  width,
}: {
  height?: number;
  width?: number;
}) {
  return (
    <View style={{ height, width }}>
      <Text style={{ color: "transparent" }}>spacer</Text>
    </View>
  );
}
