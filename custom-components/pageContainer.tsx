import { col } from "@/constants/Colors";
import { Image, StyleSheet, View } from "react-native";
import CustomParallaxScroll, { headerTextSizes } from "./parallaxScroll";
import { LinearGradient } from "expo-linear-gradient";
import { ReactElement } from "react";
import { imageExample1 } from "@/assets/imageExports";

export default function PageContainer({
  children,
  image = imageExample1,
  headerText = "Divinations",
  headerTextContainer = false,
  headerCornerImage,
  headerSecondaryText,
  headerSecondaryTextSize,
  gradientColors = [col[640], col[740], col[640]],
  noGradient = false,
  backgroundOverlay,
  headerSize,
  headerIconButton,
  headerImageHeight = 170,
  parallaxBorder,
  paddingBottom,
}: {
  children: React.ReactNode;
  image?: string;
  headerText?: string;
  noGradient?: boolean;
  headerIconButton?: ReactElement;
  headerCornerImage?: string;
  headerSecondaryText?: string;
  headerSecondaryTextSize?: headerTextSizes;
  headerTextContainer?: boolean;
  gradientColors?: string[];
  backgroundOverlay?: string;
  headerImageHeight?: number;
  parallaxBorder?: any;
  headerSize?: headerTextSizes;
  paddingBottom?: number;
}) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    outerContainer: {
      flex: 1,
      width: "100%",
      height: "100%",
    },
  });

  return (
    <CustomParallaxScroll
      headerHeight={headerImageHeight}
      headerCornerImage={headerCornerImage as any}
      headerSecondaryText={headerSecondaryText}
      headerSecondaryTextSize={headerSecondaryTextSize}
      headerSize={headerSize}
      parallaxBorder={parallaxBorder}
      headerTextContainer={headerTextContainer}
      paddingBottom={paddingBottom}
      headerImage={
        <Image
          source={image as any}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      }
      headerIconButton={headerIconButton}
      headerBackgroundColor={{ dark: col[700], light: col[700] }}
      headerText={headerText}
    >
      {noGradient ? (
        <View style={styles.outerContainer}>
          <View
            style={[
              styles.outerContainer,
              { backgroundColor: backgroundOverlay },
            ]}
          >
            <View style={styles.container}>{children}</View>
          </View>
        </View>
      ) : (
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View
            style={[
              styles.outerContainer,
              { backgroundColor: backgroundOverlay },
            ]}
          >
            <View style={styles.container}>{children}</View>
          </View>
        </LinearGradient>
      )}
    </CustomParallaxScroll>
  );
}
