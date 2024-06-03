import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { col } from "./Colors";

export function GradientBackground({
  colors,
  children,
  style,
}: {
  colors: string[];
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <LinearGradient
      colors={colors}
      style={[styles.gradient, style]}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
    >
      <View style={styles.inner}>{children}</View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    display: "flex",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  inner: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export function GradientOne({
  children,
  style,
}: {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <GradientBackground colors={[col[100], col[300]]} style={style}>
      {children}
    </GradientBackground>
  );
}

export function GradientTwo({
  children,
  style,
}: {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <GradientBackground colors={[col[200], col[300]]} style={style}>
      {children}
    </GradientBackground>
  );
}

export function GradientThree({
  children,
  style,
}: {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <GradientBackground colors={[col[200], col[400]]} style={style}>
      {children}
    </GradientBackground>
  );
}

export function GradientFour({
  children,
  style,
}: {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <GradientBackground colors={[col[300], col[500]]} style={style}>
      {children}
    </GradientBackground>
  );
}

export function GradientFive({
  children,
  style,
}: {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <GradientBackground colors={[col[500], col[600]]} style={style}>
      {children}
    </GradientBackground>
  );
}

export function GradientSix({
  children,
  style,
}: {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <GradientBackground colors={[col[600], col[700]]} style={style}>
      {children}
    </GradientBackground>
  );
}

export function GradientSeven({
  children,
  style,
}: {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <GradientBackground colors={[col[700], col[800]]} style={style}>
      {children}
    </GradientBackground>
  );
}

export function GradientEight({
  children,
  style,
}: {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <GradientBackground colors={[col[800], col[900]]} style={style}>
      {children}
    </GradientBackground>
  );
}

export function GradientNine({
  children,
  style,
}: {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <GradientBackground colors={[col[400], col[600]]} style={style}>
      {children}
    </GradientBackground>
  );
}

export function GradientTen({
  children,
  style,
}: {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <GradientBackground colors={[col[500], col[700]]} style={style}>
      {children}
    </GradientBackground>
  );
}

export function GradientEleven({
  children,
  style,
}: {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <GradientBackground colors={[col[800], col[500]]} style={style}>
      {children}
    </GradientBackground>
  );
}
