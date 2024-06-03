import {
  buttonBg,
  buttonPressBg,
  buttonPressText,
  buttonText,
  col,
} from "@/constants/Colors";
import React, { useState } from "react";
import { TouchableOpacity, StyleProp, ViewStyle, View } from "react-native";
import { TextSm } from "./textComponents";
import { boxShadows, textShadows } from "@/constants/ShadowStyles";
import { borders } from "@/constants/BorderStyles";
import { Ionicons } from "@expo/vector-icons";
import BouncingDots from "./bouncingDots";
import CustomAlert from "./alert";
import { boldAccentFont } from "@/constants/FontVariables";

interface CustomButtonProps {
  onPress?: () => void;
  scrollTo?: () => void;
  style?: StyleProp<ViewStyle>;
  text: string;
  icon?: string;
  isLoading?: boolean;
  showAlert?: boolean;
  alertTitle?: string;
  alertText?: string;
  confirmText?: string;
  cancelText?: string;
}

export default function MyButton({
  onPress,
  scrollTo,
  style,
  text,
  icon,
  isLoading,
  showAlert = false,
  alertTitle,
  alertText,
  confirmText,
  cancelText,
}: CustomButtonProps) {
  const [bg, setBg] = useState(buttonBg);
  const [color, setColor] = useState(col[900]);

  const onPressButton = () => {
    if (scrollTo) {
      scrollTo();
    } else if (showAlert) {
      setAlertVisible(true);
    } else if (onPress) {
      onPress();
    }
  };

  const handlePressIn = () => {
    setBg(buttonPressBg);
    setColor(buttonPressText);
  };

  const handlePressOut = () => {
    setBg(buttonBg);
    setColor(buttonText);
  };
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={onPressButton}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[
          borders.borderMd700,
          boxShadows.md,
          {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            backgroundColor: bg,
            borderRadius: 25,
            paddingHorizontal: 13,
            paddingVertical: 3,
            gap: 5,
          },
          style,
        ]}
      >
        {isLoading ? (
          <View style={{ paddingHorizontal: 5, paddingVertical: 5 }}>
            <BouncingDots color={col[600]} />
          </View>
        ) : (
          <>
            {icon && (
              <Ionicons
                size={20}
                style={[{ color: color }]}
                name={icon as any}
              />
            )}
            <TextSm
              padding={0}
              style={[
                {
                  color: color,
                  borderRadius: 25,
                  fontFamily: boldAccentFont,
                  paddingVertical: 2,
                },
                textShadows.glow100Lg,
              ]}
            >
              {text}
            </TextSm>
          </>
        )}
      </TouchableOpacity>

      <CustomAlert
        isVisible={alertVisible}
        onClose={() => setAlertVisible(false)}
        title={alertTitle}
        text={alertText}
        confirmText={confirmText}
        cancelText={cancelText}
      />
    </>
  );
}
