import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
} from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import { Skeleton } from "moti/skeleton";
import { col } from "@/constants/Colors";
import { borders } from "@/constants/BorderStyles";
import { boxShadows } from "@/constants/ShadowStyles";

interface ShiftingImagesProps {
  imageArray: ImageSourcePropType[];
  delaySeconds?: number;
  transitionDuration?: number;
  width?: number;
  height?: number;
  shape?: "rectangle" | "circle";
  imagesLocal?: boolean;
  imageStyle?: any;
  containerStyle?: any;
  border?: any;
  boxShadow?: any;
  isImages?: boolean;
}

const shapeStyles = {
  rectangle: {},
  circle: { borderRadius: 1000 },
};

const { width: screenWidth } = Dimensions.get("window");

export default function ShiftingImages({
  imageArray,
  delaySeconds = 6,
  transitionDuration = 2,
  imagesLocal = true,
  width = screenWidth * 0.95,
  height = screenWidth * 0.95,
  shape = "circle",
  border = borders.borderSm900,
  boxShadow = boxShadows.lg,
  imageStyle = {},
  containerStyle = {},
  isImages = true,
}: ShiftingImagesProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(imagesLocal);

  const opacity = useSharedValue(1);

  useEffect(() => {
    const totalDisplayTime = delaySeconds * 1000;

    const timer = setInterval(() => {
      opacity.value = withTiming(
        0,
        {
          duration: transitionDuration * 1000,
          easing: Easing.inOut(Easing.ease),
        },
        () => {
          const newIndex = (currentImageIndex + 1) % imageArray.length;
          runOnJS(setCurrentImageIndex)(newIndex);
          opacity.value = withTiming(1, {
            duration: transitionDuration * 1000,
            easing: Easing.inOut(Easing.ease),
          });
        }
      );
    }, totalDisplayTime);

    return () => {
      clearInterval(timer);
    };
  }, [delaySeconds, imageArray.length, transitionDuration, currentImageIndex]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <View
      style={[
        styles.centerHorizontalFull,
        containerStyle,
        { width: width, height: height },
      ]}
    >
      {imagesLoaded ? (
        <Animated.View
          style={[
            styles.flex,
            boxShadow,
            styles.relative,
            { width: width, height: height },
          ]}
        >
          <Animated.Image
            source={imageArray[currentImageIndex]}
            style={[
              border,

              styles.absolute,
              styles.inset0,
              styles.objectCover,
              { width: width, height: height },
              shapeStyles[shape],
              imageStyle,
              animatedStyle,
            ]}
            resizeMode="cover"
          />
        </Animated.View>
      ) : (
        <View
          style={[
            styles.center,
            styles.relative,
            { width: width, height: height },
          ]}
        >
          <Skeleton
            colorMode="light"
            colors={[col[200], col[300], col[400]]}
            width={width}
            height={height}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  centerHorizontalFull: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  flex: {
    display: "flex",
  },
  relative: {
    position: "relative",
  },
  absolute: {
    position: "absolute",
  },
  inset0: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  objectCover: {
    width: "100%",
    height: "100%",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
