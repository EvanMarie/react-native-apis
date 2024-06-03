import type { PropsWithChildren, ReactElement } from "react";
import { Image, StyleSheet, View, useColorScheme } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import {
  Text2xl,
  Text3xl,
  Text4xl,
  Text5xl,
  TextLg,
  TextMd,
  TextSm,
  TextXl,
} from "./textComponents";
import { col } from "@/constants/Colors";
import { boxShadows, textShadows } from "@/constants/ShadowStyles";
import { bordersT } from "@/constants/BorderStyles";
import { Link } from "expo-router";
import { CenterHorizontalFull, Flex, VStack } from "./containers";
import { screenHeight } from "@/constants/variousConstants";
import { MyComponentView } from "./componentView";
import { boldAccentFont } from "@/constants/FontVariables";

export type headerTextSizes =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
  headerHeight?: number;
  headerOverlayColor?: string;
  headerText?: string;
  headerTextColor?: string;
  headerSize?: headerTextSizes;
  headerSecondaryTextSize?: headerTextSizes;
  headerCornerImage?: string;
  headerSecondaryText?: string;
  headerIconButton?: ReactElement;
  parallaxBorder?: any;
  headerTextContainer?: boolean;
  paddingBottom?: number;
}>;

export default function CustomParallaxScroll({
  children,
  headerImage,
  headerBackgroundColor,
  headerText,
  headerTextColor = col["light"],
  headerOverlayColor,
  headerHeight = 250,
  headerSize = "3xl",
  headerSecondaryTextSize = "xl",
  headerCornerImage,
  headerSecondaryText,
  headerIconButton,
  parallaxBorder = bordersT.borderTmd900,
  headerTextContainer = false,
  paddingBottom = 50,
}: Props) {
  const HEADER_HEIGHT = headerHeight;
  const colorScheme = useColorScheme() ?? "light";
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      height: "100%",
    },
    header: {
      height: headerHeight,
      overflow: "hidden",
    },
    content: {
      flex: 1,
      height: "100%",
      overflow: "hidden",
    },
    headerContainer: {
      backgroundColor: col[950],
      paddingHorizontal: 15,
      paddingVertical: 5,
      borderRadius: 10,
      alignItems: "center",
    },
  });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.7]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  const getHeaderTextSize = (headerSize: string) => {
    switch (headerSize) {
      case "sm":
        return TextSm;
      case "md":
        return TextMd;
      case "lg":
        return TextLg;
      case "xl":
        return TextXl;
      case "2xl":
        return Text2xl;
      case "3xl":
        return Text3xl;
      case "4xl":
        return Text4xl;
      case "5xl":
        return Text5xl;
      default:
        return Text3xl;
    }
  };

  const getSecondaryTextPadding = (headerSize: string) => {
    switch (headerSize) {
      case "sm":
        return 25;
      case "md":
        return 30;
      case "lg":
        return 35;
      case "xl":
        return 40;
      case "2xl":
        return 45;
      case "3xl":
        return 50;
      case "4xl":
        return 55;
      case "5xl":
        return 60;
      default:
        return 30;
    }
  };

  return (
    <MyComponentView
      style={[
        styles.container,
        {
          display: "flex",
          flex: 1,
          height: "100%",
          minHeight: screenHeight,
        },
      ]}
    >
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        removeClippedSubviews={true}
        showsVerticalScrollIndicator={false}
        style={[
          { display: "flex", flex: 1, height: "100%", minHeight: screenHeight },
        ]}
      >
        <Flex
          style={[
            {
              position: "absolute",
              flexDirection: "column",
              height: headerHeight,
              width: "100%",
              zIndex: 1,
              display: "flex",
              flex: 1,
              alignItems: headerTextContainer ? "center" : "flex-start",
              justifyContent: "flex-end",
              paddingVertical: 5,
              paddingHorizontal: 5,
            },
          ]}
        >
          <VStack
            style={
              headerTextContainer
                ? [styles.headerContainer, boxShadows.glowSm900]
                : {}
            }
          >
            {headerSecondaryText && (
              <View>
                {getHeaderTextSize(headerSecondaryTextSize)({
                  lineHeight: "md",
                  style: [
                    textShadows.glow900Lg,
                    {
                      color: headerTextColor,
                      fontFamily: boldAccentFont,
                      padding: 0,
                    },
                  ],
                  children: headerSecondaryText,
                })}
              </View>
            )}
            {headerText && (
              <View>
                {getHeaderTextSize(headerSize)({
                  lineHeight: "md",
                  style: [
                    textShadows.glow900Lg,
                    {
                      color: headerTextColor,
                      fontFamily: boldAccentFont,
                      padding: 0,
                    },
                  ],
                  children: headerText,
                })}
              </View>
            )}
          </VStack>
        </Flex>

        {headerCornerImage && (
          <View
            style={{
              position: "absolute",
              height: headerHeight,
              width: "100%",
              zIndex: 1,
              top: 0,
              display: "flex",
              flex: 1,
              backgroundColor: headerOverlayColor,
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Link href="/(tabs)">
              {/* <Link href="/design-dev"> */}
              <Image
                source={headerCornerImage as any}
                style={{
                  width: 90,
                  height: 120,
                  marginRight: 15,
                }}
              />
            </Link>
          </View>
        )}
        {headerIconButton && (
          <View
            style={{
              position: "absolute",
              height: headerHeight,
              width: "100%",
              zIndex: 2,
              top: 50,
              right: 10,
              display: "flex",
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "flex-start",
            }}
          >
            {headerIconButton}
          </View>
        )}
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}
        >
          {headerImage}
        </Animated.View>
        <CenterHorizontalFull
          style={[
            parallaxBorder,
            { height: "100%", flex: 1, backgroundColor: "white" },
          ]}
        >
          <MyComponentView
            style={[
              styles.content,
              {
                display: "flex",
                flex: 1,
                height: "100%",
                paddingBottom: paddingBottom,
              },
            ]}
          >
            {children}
          </MyComponentView>
        </CenterHorizontalFull>
      </Animated.ScrollView>
    </MyComponentView>
  );
}
