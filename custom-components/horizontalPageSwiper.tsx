import React, { useState, useRef } from "react";
import { col } from "@/constants/Colors";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import PagerView from "react-native-pager-view";
import { HeadingXxs } from "./textComponents";
import { Flex } from "./containers";
import { Ionicons } from "@expo/vector-icons";
import { borders } from "@/constants/BorderStyles";
import { boxShadows } from "@/constants/ShadowStyles";
import { Link } from "expo-router";
import { screenHeight, screenWidth } from "@/constants/variousConstants";

interface HorizontalPageSwiperProps {
  componentArray: React.ReactNode[];
  navLink?: string;
  navText?: string;
  navIcon?: string;
  navPress?: () => void;
  cornerButton?: React.ReactNode;
  orientation?: "horizontal" | "vertical";
}

export default function HorizontalPageSwiper({
  componentArray,
  navLink,
  navText,
  navIcon,
  navPress,
  cornerButton,
  orientation = "horizontal",
}: HorizontalPageSwiperProps) {
  const numPages = componentArray.length;
  const pagerViewRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleClick = (index: number) => {
    pagerViewRef.current?.setPage(index);
    setCurrentPage(index);
  };

  return (
    <View style={styles.container}>
      <PagerView
        ref={pagerViewRef}
        style={styles.container}
        initialPage={0}
        onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
        orientation={orientation}
      >
        {componentArray.map((component, index) => (
          <View style={styles.innerContainer} key={index}>
            {component}
          </View>
        ))}
      </PagerView>
      <View style={styles.cornerButtonStyle}>{cornerButton}</View>
      <View style={styles.pageProgress}>
        {currentPage > 0 ? (
          <TouchableOpacity
            onPress={() => handleClick(currentPage - 1)}
            style={[borders.borderXs900, boxShadows.md, styles.buttonBase]}
          >
            <Ionicons name="arrow-back" size={20} color={col[500]} />
          </TouchableOpacity>
        ) : (
          <Text style={{ color: "transparent" }}>spacer</Text>
        )}
        {currentPage < numPages - 1 ? (
          <TouchableOpacity
            onPress={() => handleClick(currentPage + 1)}
            style={[borders.borderXs900, boxShadows.md, styles.buttonBase]}
          >
            <Ionicons name="arrow-forward" size={20} color={col[500]} />
          </TouchableOpacity>
        ) : navLink ? (
          <Link href={navLink as string}>
            <Flex
              style={[
                borders.borderXs900,
                boxShadows.md,
                styles.buttonBase,
                { gap: 5 },
              ]}
            >
              <Ionicons name={navIcon as any} size={16} color={col[500]} />
              <HeadingXxs padding={2}>{navText}</HeadingXxs>
            </Flex>
          </Link>
        ) : navPress ? (
          <TouchableOpacity
            onPress={navPress}
            style={[
              borders.borderXs900,
              boxShadows.md,
              styles.buttonBase,
              { gap: 5 },
            ]}
          >
            <Ionicons name={navIcon as any} size={16} color={col[500]} />
            <HeadingXxs padding={2}>{navText}</HeadingXxs>
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  pageProgress: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    right: 0,
    paddingVertical: 5,
    paddingHorizontal: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cornerButtonStyle: {
    position: "absolute",
    top: 40,
    right: 5,
  },
  buttonBase: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: col[850],
    borderRadius: 30,
    padding: 7,
  },
});

export function SwipablePageContainer({
  children,
  bg = col[630],
}: {
  children: React.ReactNode;
  bg?: string;
}) {
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        height: screenHeight,
        width: screenWidth,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: bg,
      }}
    >
      {children}
    </View>
  );
}
