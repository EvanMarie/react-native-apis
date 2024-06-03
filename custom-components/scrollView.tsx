import Animated from "react-native-reanimated";

export default function MyScrollView({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Animated.ScrollView
      scrollEventThrottle={16}
      removeClippedSubviews={true}
      showsVerticalScrollIndicator={false}
      style={[{ display: "flex", flex: 1, height: "100%", width: "100%" }]}
    >
      {children}
    </Animated.ScrollView>
  );
}
