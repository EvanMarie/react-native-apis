import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { DimensionValue, StyleSheet, TouchableOpacity } from "react-native";
import { HeadingLg, HeadingMd, TextLg } from "./textComponents";
import { col } from "@/constants/Colors";
import { boxShadows } from "@/constants/ShadowStyles";
import Spacer from "./spacer";
import { MyComponentView } from "./componentView";
import { boldAccentFont } from "@/constants/FontVariables";

export function MyCollapsible({
  children,
  title,
  paddingHorizontal = 10,
  paddingVertical = 5,
  width = "100%",
}: {
  children: React.ReactNode;
  title: string;
  paddingHorizontal?: number;
  paddingVertical?: number;
  width?: string | number | DimensionValue;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const styles = StyleSheet.create({
    heading: {
      paddingHorizontal: paddingHorizontal,
      paddingVertical: paddingVertical,
      width: width as DimensionValue,
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
    },
    content: {
      paddingHorizontal: 15,
      borderRadius: 13,
    },
  });

  return (
    <MyComponentView
      gradientColors={[col[900], col[950], col[900]]}
      style={[
        boxShadows.md,
        { borderRadius: 13, zIndex: 1, width: width as DimensionValue },
      ]}
    >
      <TouchableOpacity
        style={styles.heading}
        onPress={toggleCollapsible}
        activeOpacity={0.8}
      >
        <Ionicons
          name={
            isOpen
              ? "chevron-down-circle-outline"
              : "chevron-forward-circle-outline"
          }
          size={30}
          color={col[200]}
        />
        <HeadingLg
          style={{ color: col[200], padding: 5, paddingTop: 10 }}
          fontFamily={boldAccentFont}
        >
          {title}
        </HeadingLg>
      </TouchableOpacity>
      {isOpen && (
        <MyComponentView
          style={styles.content}
          gradientColors={[col[900], col[950], col[900]]}
        >
          {children}
          <Spacer height={10} />
        </MyComponentView>
      )}
    </MyComponentView>
  );
}
