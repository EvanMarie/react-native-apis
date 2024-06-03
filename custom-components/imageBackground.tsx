import { ImageBackground, StyleSheet } from "react-native";

export default function MyImageBackground({
  image,
  children,
  style,
  blur = 20,
  borderRadius = 0,
}: {
  image: string;
  children?: React.ReactNode;
  style?: any;
  blur?: number;
  borderRadius?: number;
}) {
  const styles = StyleSheet.create({
    modalBackground: {
      flex: 1,
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
    },
    blurBackground: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  return (
    <ImageBackground
      source={image as any}
      style={[styles.blurBackground, style]}
      blurRadius={blur}
      borderRadius={borderRadius}
    >
      {children}
    </ImageBackground>
  );
}
