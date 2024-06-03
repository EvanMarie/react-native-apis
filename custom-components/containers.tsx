import React, { forwardRef } from "react";
import { SafeAreaView, StyleProp, View, ViewStyle } from "react-native";

export function CenterSafeFull({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
}

export function FlexColSafeFull({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          flexDirection: "column",
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
}

export function Box({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return <View style={style}>{children}</View>;
}

export function Flex({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={[{ display: "flex", flexDirection: "row" }, style]}>
      {children}
    </View>
  );
}

export function PaddedFullStack({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <SafeAreaView
      style={[
        {
          width: "100%",
          flex: 1,
          flexDirection: "column",
          paddingTop: 44,
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
}

export function WrapFull({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <SafeAreaView
      style={[
        {
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
}

interface VStackFullProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  id?: string;
  onPress?: () => void;
}

export const VStackFull = forwardRef<View, VStackFullProps>(
  ({ children, style, id, onPress }, ref) => {
    return (
      <View
        id={id}
        ref={ref}
        style={[
          {
            display: "flex",
            flexDirection: "column",
            width: "100%",
          },
          style,
        ]}
      >
        {children}
      </View>
    );
  }
);

export function FlexFull({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View
      style={[
        {
          display: "flex",
          width: "100%",
          flexDirection: "row",
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

export function CenterHorizontalFull({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View
      style={[
        {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          width: "100%",
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

export function Center({
  children,
  width,
  height,
  style,
}: {
  children: React.ReactNode;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View
      style={[
        {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: width,
          height: height,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

export const VStack = forwardRef<View, VStackFullProps>(
  ({ children, style, id }, ref) => {
    return (
      <SafeAreaView
        id={id}
        ref={ref}
        style={[
          {
            display: "flex",
            flexDirection: "column",
          },
          style,
        ]}
      >
        {children}
      </SafeAreaView>
    );
  }
);
