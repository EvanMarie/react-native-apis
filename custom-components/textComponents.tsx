import { col } from "@/constants/Colors";
import { textShadows } from "@/constants/ShadowStyles";
import React from "react";
import { StyleProp, Text, TextStyle, StyleSheet, Platform } from "react-native";

const systemFont = Platform.select({
  ios: "System", // 'San Francisco' on iOS
  android: "Roboto", // 'Roboto' on Android
});

export const headingColor = col[200];
export const headingPadding = 7;
export const defaultTextColor = "white";
export const textPadding = 7;

export const fontStyles = StyleSheet.create({
  regular: {
    fontFamily: systemFont,
    fontWeight: "normal",
  },
  bold: {
    fontFamily: systemFont,
    fontWeight: "bold",
  },
  italic: {
    fontFamily: systemFont,
    fontStyle: "italic",
  },
  light: {
    fontFamily: systemFont,
    fontWeight: "300",
  },
  thin: {
    fontFamily: systemFont,
    fontWeight: "100",
  },
  medium: {
    fontFamily: systemFont,
    fontWeight: "500",
  },
  semiBold: {
    fontFamily: Platform.select({
      ios: systemFont,
      android: "Roboto",
    }),
    fontWeight: Platform.select({
      ios: "500",
      android: "500",
    }),
  },
  black: {
    fontFamily: systemFont,
    fontWeight: "900",
  },
});

export type TextType = {
  children: React.ReactNode;
  lineHeight?: LineHeight;
  textColor?: string;
  style?: StyleProp<TextStyle>;
  padding?: number;
  fontFamily?: string;
  textShadow?: any;
  numberOfLines?: number;
};

export type LineHeight = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export function getLineHeights(fontSize: number): {
  [key in LineHeight]: number;
} {
  return {
    xs: fontSize + 4,
    sm: fontSize + 8,
    md: fontSize + 12,
    lg: fontSize + 16,
    xl: fontSize + 20,
    xxl: fontSize + 24,
  };
}

export function getHeadingLineHeights(fontSize: number): {
  [key in LineHeight]: number;
} {
  return {
    xs: fontSize + 6,
    sm: fontSize + 12,
    md: fontSize + 18,
    lg: fontSize + 24,
    xl: fontSize + 30,
    xxl: fontSize + 36,
  };
}

export function TextXs({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
  numberOfLines,
  textShadow,
  fontFamily,
}: TextType) {
  const fontSize = 13;
  const lineHeights = getLineHeights(fontSize);

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        textShadow,
        {
          fontFamily: fontFamily,
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function TextSm({
  children,
  textColor = defaultTextColor,
  style,
  lineHeight = "xs",
  padding = textPadding,
  numberOfLines,
  textShadow,
  fontFamily,
}: TextType) {
  const fontSize = 17;
  const lineHeights = getLineHeights(fontSize);
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        textShadow,
        {
          fontFamily: fontFamily,
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function TextMd({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
  numberOfLines,
  textShadow,
  fontFamily,
}: TextType) {
  const fontSize = 21;
  const lineHeights = getLineHeights(fontSize);
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        textShadow,
        {
          fontFamily: fontFamily,
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function TextLg({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
  numberOfLines,
  textShadow,
  fontFamily,
}: TextType) {
  const fontSize = 25;
  const lineHeights = getLineHeights(fontSize);
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        textShadow,
        {
          fontFamily: fontFamily,
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function TextXl({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
  numberOfLines,
  textShadow,
  fontFamily,
}: TextType) {
  const fontSize = 29;
  const lineHeights = getLineHeights(fontSize);
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        textShadow,
        {
          fontFamily: fontFamily,
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Text2xl({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
  numberOfLines,
  textShadow,
  fontFamily,
}: TextType) {
  const fontSize = 33;
  const lineHeights = getLineHeights(fontSize);
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        textShadow,
        {
          fontFamily: fontFamily,
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Text3xl({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
  numberOfLines,
  textShadow,
  fontFamily,
}: TextType) {
  const fontSize = 37;
  const lineHeights = getLineHeights(fontSize);

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        textShadow,
        {
          fontFamily: fontFamily,
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Text4xl({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
  numberOfLines,
  textShadow,
  fontFamily,
}: TextType) {
  const fontSize = 41;
  const lineHeights = getLineHeights(fontSize);
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        textShadow,
        {
          fontFamily: fontFamily,
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Text5xl({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
  numberOfLines,
  textShadow,
  fontFamily,
}: TextType) {
  const fontSize = 45;
  const lineHeights = getLineHeights(fontSize);
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        textShadow,
        {
          fontFamily: fontFamily,
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Text6xl({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
  numberOfLines,
  textShadow,
  fontFamily,
}: TextType) {
  const fontSize = 49;
  const lineHeights = getLineHeights(fontSize);
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        textShadow,
        {
          fontFamily: fontFamily,
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Text7xl({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
  numberOfLines,
  textShadow,
  fontFamily,
}: TextType) {
  const fontSize = 53;
  const lineHeights = getLineHeights(fontSize);
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        textShadow,
        {
          fontFamily: fontFamily,
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Text8xl({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
  numberOfLines,
  textShadow,
  fontFamily,
}: TextType) {
  const fontSize = 57;
  const lineHeights = getLineHeights(fontSize);
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        textShadow,
        {
          fontFamily: fontFamily,
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Text9xl({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
  numberOfLines,
  textShadow,
  fontFamily,
}: TextType) {
  const fontSize = 61;
  const lineHeights = getLineHeights(fontSize);
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        textShadow,
        {
          fontFamily: fontFamily,
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Text10xl({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
  numberOfLines,
  textShadow,
  fontFamily,
}: TextType) {
  const fontSize = 65;
  const lineHeights = getLineHeights(fontSize);
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        textShadow,
        {
          fontFamily: fontFamily,
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

// HEADINGS COMPONENTS AND STYLES

export function HeadingXxs({
  children,
  style,
  textColor = headingColor,
  padding = headingPadding,
  lineHeight = "xs",
  fontFamily = "Play_400Regular",
  textShadow = textShadows.rightXl,
}: TextType) {
  const fontSize = 12;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        textShadow,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
          textShadowColor: col[800],
          fontFamily: fontFamily,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function HeadingXs({
  children,
  style,
  textColor = headingColor,
  padding = headingPadding,
  lineHeight = "xs",
  fontFamily = "Play_400Regular",
  textShadow = textShadows.rightXl,
}: TextType) {
  const fontSize = 16;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        textShadow,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
          textShadowColor: col[800],
          fontFamily: fontFamily,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function HeadingSm({
  children,
  style,
  textColor = headingColor,
  padding = headingPadding,
  lineHeight = "xs",
  fontFamily = "Play_400Regular",
  textShadow,
}: TextType) {
  const fontSize = 18;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        textShadow,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
          fontFamily: fontFamily,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function HeadingMd({
  children,
  style,
  textColor = headingColor,
  padding = headingPadding,
  lineHeight = "xs",
  fontFamily = "Play_400Regular",
  textShadow = textShadows.rightXl,
}: TextType) {
  const fontSize = 20;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        textShadow,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
          fontFamily: fontFamily,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function HeadingLg({
  children,
  style,
  textColor = headingColor,
  padding = headingPadding,
  lineHeight = "xs",
  fontFamily = "Play_400Regular",
  textShadow = textShadows.rightXl,
}: TextType) {
  const fontSize = 24;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        textShadow,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
          fontFamily: fontFamily,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function HeadingXl({
  children,
  style,
  textColor = headingColor,
  padding = headingPadding,
  lineHeight = "xs",
  fontFamily = "Play_400Regular",
  textShadow = textShadows.rightXl,
}: TextType) {
  const fontSize = 28;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        textShadow,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
          fontFamily: fontFamily,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Heading2xl({
  children,
  style,
  textColor = headingColor,
  padding = headingPadding,
  lineHeight = "xs",
  fontFamily = "Play_400Regular",
  textShadow = textShadows.rightXl,
}: TextType) {
  const fontSize = 32;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        textShadow,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
          fontFamily: fontFamily,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Heading3xl({
  children,
  style,
  textColor = headingColor,
  padding = headingPadding,
  lineHeight = "xs",
  fontFamily = "Play_400Regular",
  textShadow = textShadows.rightXl,
}: TextType) {
  const fontSize = 36;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        textShadow,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
          fontFamily: fontFamily,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Heading4xl({
  children,
  style,
  textColor = headingColor,
  padding = headingPadding,
  lineHeight = "xs",
  fontFamily = "Play_400Regular",
  textShadow = textShadows.rightXl,
}: TextType) {
  const fontSize = 40;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        textShadow,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
          fontFamily: fontFamily,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Heading5xl({
  children,
  style,
  textColor = headingColor,
  padding = headingPadding,
  lineHeight = "xs",
  fontFamily = "Play_400Regular",
  textShadow = textShadows.rightXl,
}: TextType) {
  const fontSize = 44;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        textShadow,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
          fontFamily: fontFamily,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Heading6xl({
  children,
  style,
  textColor = headingColor,
  padding = headingPadding,
  lineHeight = "xs",
  fontFamily = "Play_400Regular",
  textShadow = textShadows.rightXl,
}: TextType) {
  const fontSize = 48;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        textShadow,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
          fontFamily: fontFamily,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Heading7xl({
  children,
  style,
  textColor = headingColor,
  padding = headingPadding,
  lineHeight = "xs",
  fontFamily = "Play_400Regular",
  textShadow = textShadows.rightXl,
}: TextType) {
  const fontSize = 52;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        textShadow,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
          fontFamily: fontFamily,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Heading8xl({
  children,
  style,
  textColor = headingColor,
  padding = headingPadding,
  lineHeight = "xs",
  fontFamily = "Play_400Regular",
  textShadow = textShadows.rightXl,
}: TextType) {
  const fontSize = 56;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        textShadow,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
          fontFamily: fontFamily,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Heading9xl({
  children,
  style,
  textColor = headingColor,
  padding = headingPadding,
  lineHeight = "xs",
  fontFamily = "Play_400Regular",
  textShadow = textShadows.rightXl,
}: TextType) {
  const fontSize = 60;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        textShadow,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
          fontFamily: fontFamily,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Heading10xl({
  children,
  style,
  textColor = headingColor,
  padding = headingPadding,
  lineHeight = "xs",
  fontFamily = "Play_400Regular",
  textShadow = textShadows.rightXl,
}: TextType) {
  const fontSize = 68;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        textShadow,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
          fontFamily: fontFamily,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}
