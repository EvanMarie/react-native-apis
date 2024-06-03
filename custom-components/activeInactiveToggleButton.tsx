import { col } from "@/constants/Colors";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  DimensionValue,
} from "react-native";
import { Flex } from "./containers";
import { boxShadows, textShadows } from "@/constants/ShadowStyles";
import { borders } from "@/constants/BorderStyles";

type ActiveInactiveToggleButtonProps = {
  title: string;
  selected: string;
  onPress: () => void;
  activeColor?: string;
  inactiveColor?: string;
  activeBg?: string;
  inactiveBg?: string;
  width?: number | string;
  paddingVertical?: number;
  paddingHorizontal?: number;
  height?: number;
};

export default function ActiveInactiveToggleButton({
  title,
  selected,
  onPress,
  activeColor = col[900],
  inactiveColor = col[180],
  activeBg = col[500],
  inactiveBg = "transparent",
  width,
  paddingVertical = 5,
  paddingHorizontal = 10,
}: ActiveInactiveToggleButtonProps) {
  const styles = StyleSheet.create({
    buttonContainer: {
      width: width as DimensionValue,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      fontSize: 20,
      color: selected === title ? activeColor : inactiveColor,
      fontWeight: selected === title ? "bold" : "normal",
    },
    buttonBackground: {
      backgroundColor: selected === title ? activeBg : inactiveBg,
      borderRadius: 15,
      paddingVertical: paddingVertical,
      paddingHorizontal: paddingHorizontal,
    },
  });

  return (
    <Flex style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.buttonBackground,
          selected === title
            ? [boxShadows.glowMd900, borders.borderMd400]
            : undefined,
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            selected === title ? textShadows.glow100Sm : textShadows.rightLg,
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </Flex>
  );
}
