import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Modal from "react-native-modal";
import { useRouter } from "expo-router";
import { col } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { borders } from "@/constants/BorderStyles";
import { boxShadows, textShadows } from "@/constants/ShadowStyles";
import { HeadingLg, HeadingSm, HeadingXs, TextSm } from "./textComponents";
import { TouchableOpacity } from "react-native-gesture-handler";
import { VStackFull } from "./containers";
import { boldAccentFont } from "@/constants/FontVariables";

interface CustomAlertProps {
  isVisible: boolean;
  onClose: () => void;
  onPress?: () => void;
  pathname?: string;
  params?: Record<string, any>;
  title?: string;
  text?: string;
  confirmText?: string;
  cancelText?: string;
  includeImage?: boolean;
  image?: string;
}

export default function MyAlert({
  isVisible,
  onClose,
  onPress,
  pathname,
  params = {},
  title = "Confirm Navigation",
  text = "Are you sure you want to leave this screen?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  includeImage = true,
  image,
}: CustomAlertProps) {
  const styles = StyleSheet.create({
    modalContent: {
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      width: "100%",
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: includeImage ? "60%" : "100%",
      alignContent: "center",
      paddingVertical: 20,
      gap: 20,
    },
    cancel: {
      paddingTop: 3,
      paddingBottom: 0,
      paddingHorizontal: 7,
      backgroundColor: col[500],
      borderRadius: 25,
      alignItems: "center",
    },
    confirm: {
      paddingTop: 3,
      paddingBottom: 0,
      paddingHorizontal: 7,
      color: "black",
      backgroundColor: col[600],
      borderRadius: 25,
      alignItems: "center",
    },
  });

  const router = useRouter();

  const handleConfirm = () => {
    onPress && onPress();
    pathname && router.push({ pathname, params });
    onClose();
  };

  return (
    <Modal
      isVisible={isVisible}
      backdropTransitionInTiming={400}
      backdropTransitionOutTiming={400}
      backdropOpacity={0.8}
      backdropColor={col[600]}
      onBackdropPress={onClose}
      animationIn={"fadeIn"}
      animationOut={"fadeOut"}
    >
      <View style={[styles.modalContent, boxShadows.glowMd500]}>
        <LinearGradient
          colors={[col[700], col[800], col[900]]}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={[
            borders.borderSm500,
            { padding: 20, borderRadius: 20, height: 250, width: "100%" },
          ]}
        >
          {includeImage && (
            <Image
              source={image as any}
              style={{
                position: "absolute",
                bottom: 0,
                right: 20,
                width: 90,
                height: 120,
              }}
            />
          )}
          <VStackFull
            style={{ height: "100%", justifyContent: "space-between" }}
          >
            <HeadingLg>{title}</HeadingLg>
            <TextSm>{text}</TextSm>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[boxShadows.glowSm500, styles.confirm]}
                onPress={handleConfirm}
              >
                <HeadingXs fontFamily={boldAccentFont}>{confirmText}</HeadingXs>
              </TouchableOpacity>
              <TouchableOpacity
                style={[boxShadows.glowLg900, styles.cancel]}
                onPress={onClose}
              >
                <HeadingXs
                  fontFamily={boldAccentFont}
                  textColor={col[900]}
                  textShadow={textShadows.glow100Sm}
                >
                  {cancelText}
                </HeadingXs>
              </TouchableOpacity>
            </View>
          </VStackFull>
        </LinearGradient>
      </View>
    </Modal>
  );
}
