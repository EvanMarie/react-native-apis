import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { buttonBg, col } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { boxShadows } from "@/constants/ShadowStyles";
import { borders } from "@/constants/BorderStyles";
import CustomIconButton from "./iconButton";
import CustomAlert from "./alert";

type paramsType = { [key: string]: string };
interface MyLinkIconButtonProps {
  iconName: string;
  pathname: string;
  params?: paramsType;
  size?: number;
  padding?: number;
  color?: string;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  showAlert?: boolean;
  alertTitle?: string;
  alertText?: string;
  confirmText?: string;
  cancelText?: string;
}

export default function MyLinkIconButton({
  iconName,
  pathname,
  params,
  size = 33,
  color = col[900],
  backgroundColor = buttonBg,
  padding = 8,
  style,
  showAlert = false,
  alertTitle,
  alertText,
  confirmText,
  cancelText,
}: MyLinkIconButtonProps) {
  const styles = StyleSheet.create({
    button: {
      justifyContent: "center",
      alignItems: "center",
      padding: padding,
      backgroundColor: backgroundColor,
      color: color,
    },
  });

  const [alertVisible, setAlertVisible] = useState(false);
  const router = useRouter();
  const handlePress = () => {
    router.push({
      pathname: pathname,
      params: params,
    });
  };
  return (
    <>
      {showAlert ? (
        <CustomIconButton
          size={size}
          iconName={iconName}
          onPress={() => {
            setAlertVisible(true);
          }}
        />
      ) : (
        <TouchableOpacity
          onPress={handlePress}
          style={[
            boxShadows.glowSm900,
            borders.borderSm500,
            styles.button,
            { borderRadius: 30 },
            style,
          ]}
        >
          <Ionicons
            size={size}
            style={[{ color: color }]}
            name={iconName as any}
          />
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
