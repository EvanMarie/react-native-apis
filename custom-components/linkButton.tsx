import { buttonBg, col } from "@/constants/Colors";
import React, { useState } from "react";
import { Alert, StyleProp, Text, Touchable, ViewStyle } from "react-native";
import { TextSm } from "./textComponents";
import { boxShadows, textShadows } from "@/constants/ShadowStyles";
import { borders } from "@/constants/BorderStyles";
import { Link, useRouter } from "expo-router";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomAlert from "./alert";
import CustomButton from "./button";
import { TouchableOpacity } from "react-native-gesture-handler";
import BouncingDots from "./bouncingDots";
import { boldAccentFont } from "@/constants/FontVariables";

type paramsType = { [key: string]: string };

interface MyLinkButtonProps {
  pathname: string;
  params?: paramsType;
  style?: StyleProp<ViewStyle>;
  text: string;
  icon?: string;
  showAlert?: boolean;
  alertTitle?: string;
  alertText?: string;
  confirmText?: string;
  cancelText?: string;
  onPress?: () => void;
  isLoading?: boolean;
}

export default function MyLinkButton({
  pathname,
  params,
  style,
  text,
  icon,
  showAlert = false,
  alertTitle,
  alertText,
  confirmText,
  cancelText,
  onPress,
  isLoading,
}: MyLinkButtonProps) {
  const [bg, setBg] = useState(buttonBg);
  const [color, setColor] = useState(col[900]);
  const [alertVisible, setAlertVisible] = useState(false);
  const router = useRouter();

  const handlePress = () => {
    onPress && onPress();
    router.push({
      pathname: pathname,
      params: params,
    });
  };
  return (
    <>
      {showAlert ? (
        <CustomButton
          icon={icon}
          text={text}
          onPress={() => setAlertVisible(true)}
        />
      ) : (
        <TouchableOpacity
          onPress={handlePress}
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
              paddingVertical: 5,
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
      )}
      <CustomAlert
        pathname={pathname}
        params={params}
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
