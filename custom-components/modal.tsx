import React, { useState } from "react";
import CustomButton from "./button";
import CustomIconButton from "./iconButton";
import Modal from "react-native-modal";
import { TextLg } from "./textComponents";
import { col } from "@/constants/Colors";
import { ModalProps } from "react-native";
import { View } from "react-native-animatable";
import {
  fullCenteredFlex,
  screenHeight,
  screenWidth,
} from "@/constants/variousConstants";

interface MyModalProps {
  icon?: string;
  buttonText?: string;
  buttonWithIcon?: boolean;
  buttonComponent?: React.ReactNode;
  backdropClose?: boolean;
  backdropColor?: string;
  animationTime?: number;
  backdropOpacity?: number;
  children?: React.ReactNode;
  isVisible: boolean;
  style?: ModalProps["style"];
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  animation?:
    | "fade"
    | "slide"
    | "flash"
    | "zoom"
    | "rotate"
    | "flipY"
    | "flipX";
}

const animations = {
  fade: { animateIn: "fadeIn", animateOut: "fadeOut" },
  slide: { animateIn: "slideInUp", animateOut: "slideOutDown" },
  flash: { animateIn: "flash", animateOut: "flash" },
  zoom: { animateIn: "zoomIn", animateOut: "zoomOut" },
  rotate: { animateIn: "rotate", animateOut: "rotate" },
  flipY: { animateIn: "flipInY", animateOut: "flipOutY" },
  flipX: { animateIn: "flipInX", animateOut: "flipOutX" },
};

export default function MyModal({
  backdropClose = true,
  backdropColor = col[600],
  animation = "fade",
  animationTime = 400,
  backdropOpacity = 0.8,
  children,
  isVisible,
  setIsVisible,
  style,
}: MyModalProps) {
  const onClose = () => setIsVisible(false);

  const { animateIn, animateOut } = animations[animation];

  return (
    <>
      <Modal
        isVisible={isVisible}
        backdropTransitionInTiming={animationTime}
        backdropTransitionOutTiming={animationTime}
        backdropOpacity={backdropOpacity}
        backdropColor={backdropColor}
        onBackdropPress={backdropClose ? onClose : () => {}}
        animationIn={animateIn as any}
        animationOut={animateOut as any}
        deviceHeight={screenHeight}
        deviceWidth={screenWidth}
        style={[
          {
            margin: 0,
          },
          style,
        ]}
      >
        {children}
      </Modal>
    </>
  );
}
