import { col } from "@/constants/Colors";
import { Flex } from "./containers";
import { TextSm } from "./textComponents";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { boxShadows, textShadows } from "@/constants/ShadowStyles";
import { borders, bordersT } from "@/constants/BorderStyles";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export type SegementedButtonItemType = {
  text: string;
  onPress?: () => void;
  link?: string;
};

export default function SegmentedButtonBar({
  buttonArray,
  bg = col[700],
  selectedBg = col[600],
  borderRadius = 16,
  color = col[100],
  selectedColor = col[100],
  selectedTextShadow = textShadows.rightSm,
  selectedBorder = borders.borderXs100,
  paddingHorizontal = 15,
  selectedPaddingHorizontal = 10,
  paddingVertical = 6,
  textShadow = textShadows.rightSm,
  textSize = 15,
  border = borders.borderXs800,
  fontWeight = 600,
  selectedIcon = "checkmark",
}: {
  buttonArray: SegementedButtonItemType[];
  bg?: string;
  selectedBg?: string;
  borderRadius?: number;
  selectedBorder?: any;
  color?: string;
  selectedColor?: string;
  selectedTextShadow?: any;
  paddingHorizontal?: number;
  selectedPaddingHorizontal?: number;
  paddingVertical?: number;
  textSize?: number;
  textShadow?: any;
  border?: any;
  fontWeight?: number;
  selectedIcon?: string;
}) {
  function ButtonItem({
    selectedButtonIndex,
    setSelectedButtonIndex,
    buttonItem,
    index,
  }: {
    buttonItem: SegementedButtonItemType;
    index: number;
    selectedButtonIndex: number;
    setSelectedButtonIndex: (index: number) => void;
  }) {
    const isSelected = selectedButtonIndex === index;
    return (
      <TouchableOpacity
        onPress={() => setSelectedButtonIndex(index)}
        style={[
          isSelected ? selectedBorder : border,
          boxShadows.sm,
          {
            display: "flex",
            paddingHorizontal: isSelected
              ? selectedPaddingHorizontal
              : paddingHorizontal,
            paddingVertical: paddingVertical,
            borderTopLeftRadius: index === 0 ? borderRadius : 0,
            borderBottomLeftRadius: index === 0 ? borderRadius : 0,
            borderTopRightRadius:
              index === buttonArray.length - 1 ? borderRadius : 0,
            borderBottomRightRadius:
              index === buttonArray.length - 1 ? borderRadius : 0,
            backgroundColor: isSelected ? selectedBg : bg,
          },
        ]}
      >
        <Flex style={{ gap: 2 }}>
          <Ionicons
            name={isSelected ? selectedIcon : ("" as any)}
            size={textSize + 3}
            color={isSelected ? selectedColor : color}
          />
          <Text
            style={[
              isSelected ? selectedTextShadow : textShadow,
              {
                color: isSelected ? selectedColor : color,
                fontSize: textSize,
                fontWeight: fontWeight,
              },
            ]}
          >
            {buttonItem.text}
          </Text>
        </Flex>
      </TouchableOpacity>
    );
  }

  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
  return (
    <Flex style={{}}>
      {buttonArray.map((item, index) => (
        <ButtonItem
          key={index}
          buttonItem={item}
          index={index}
          selectedButtonIndex={selectedButtonIndex}
          setSelectedButtonIndex={setSelectedButtonIndex}
        />
      ))}
    </Flex>
  );
}
