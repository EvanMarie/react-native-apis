import {
  Center,
  CenterHorizontalFull,
  FlexFull,
  VStack,
  VStackFull,
  WrapFull,
} from "@/custom-components/containers";
import CustomButton from "@/custom-components/button";
import CustomLinkButton from "@/custom-components/linkButton";
import CustomLinkIconButton from "@/custom-components/linkIconButton";
import CustomModal from "@/custom-components/modal";
import {
  Heading2xl,
  HeadingLg,
  HeadingMd,
  TextLg,
  TextMd,
  TextXl,
} from "@/custom-components/textComponents";
import ToggleSwitch from "@/custom-components/toggleSwitch";
import { useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomAlert from "@/custom-components/alert";
import HorizontalPageSwiper from "@/custom-components/horizontalPageSwiper";
import VerticalPageSwiper from "@/custom-components/verticalPageSwiper";
import CustomExpandable from "@/custom-components/exapandable";
import CustomImage from "@/custom-components/image";

import ImageWithModal from "@/custom-components/imageWithModal";
import ExpandableImage from "@/custom-components/expandableImage";
import CustomImageBackground from "@/custom-components/imageBackground";
import SegmentedButtonBar from "@/custom-components/segmentedButtonBar";
import BottomSheet from "@/custom-components/bottomSheet";
import ScrollProgress from "@/custom-components/scrollProgress";
import { boxShadows, textShadows } from "@/constants/ShadowStyles";
import { col } from "@/constants/Colors";
import { GradientFour, GradientThree } from "@/constants/Gradients";
import { screenHeight, screenWidth } from "@/constants/variousConstants";
import { borders } from "@/constants/BorderStyles";
import {
  imageExample1,
  imageExample2,
  imageExample3,
  imageExample4,
  imageExample5,
} from "@/assets/imageExports";
import BouncingDots from "../bouncingDots";
import ShiftingImages from "../shiftingImages";
import { ShiftingComponents } from "../shiftingComponents";

export function ToggleSwitchesExample() {
  const [smToggleOn, setSmToggleOn] = useState(false);
  const [mdToggleOn, setMdToggleOn] = useState(false);
  const [lgToggleOn, setLgToggleOn] = useState(false);
  return (
    <VStack style={{ gap: 10, alignItems: "center" }}>
      <HeadingLg>Toggle Switches</HeadingLg>
      <ToggleSwitch
        toggleOn={smToggleOn}
        setToggleOn={setSmToggleOn}
        size="sm"
        onIcon="happy-outline"
        offIcon="sad-outline"
        labelOff="sad"
        labelOn="happy"
      />
      <ToggleSwitch
        toggleOn={mdToggleOn}
        setToggleOn={setMdToggleOn}
        size="md"
        onIcon="notifications-outline"
        offIcon="notifications-off-outline"
        labelOff="off"
        labelOn="on"
      />
      <ToggleSwitch
        toggleOn={lgToggleOn}
        setToggleOn={setLgToggleOn}
        onIcon="mic-outline"
        offIcon="mic-off-outline"
        labelOff="muted"
        labelOn="listening"
      />
    </VStack>
  );
}

export function ButtonExamples() {
  return (
    <CenterHorizontalFull>
      <VStackFull style={{ gap: 20, alignItems: "center" }}>
        <CenterHorizontalFull>
          <HeadingLg>Buttons</HeadingLg>
        </CenterHorizontalFull>
        <CenterHorizontalFull>
          <CustomButton text="CustomButton" />
        </CenterHorizontalFull>
        <CenterHorizontalFull>
          <CustomButton icon="home" text="Home" />
        </CenterHorizontalFull>
        <CenterHorizontalFull>
          <CustomLinkButton text="CustomLinkButton" pathname="" />
        </CenterHorizontalFull>
        <CenterHorizontalFull>
          <CustomLinkIconButton iconName="home" pathname="" />
        </CenterHorizontalFull>
      </VStackFull>
    </CenterHorizontalFull>
  );
}

export function ModalExample() {
  const [modalVisible, setModalVisible] = useState(false);
  function ModalContent() {
    return (
      <View
        style={[
          boxShadows.xl,
          {
            padding: 80,
            backgroundColor: col[700],
            borderRadius: 20,
          },
        ]}
      >
        <TextLg>Modal Content</TextLg>
      </View>
    );
  }
  return (
    <VStackFull style={{ gap: 10, alignItems: "center" }}>
      <CenterHorizontalFull>
        <HeadingLg>Modal with Scroll Progress</HeadingLg>
      </CenterHorizontalFull>
      <CenterHorizontalFull>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={[
            boxShadows.lg,
            {
              padding: 10,
              width: 175,
              backgroundColor: col[500],
              borderRadius: 20,
            },
          ]}
        >
          <TextMd textColor={col[900]}>Modal Example</TextMd>
        </TouchableOpacity>
        <CustomModal
          isVisible={modalVisible}
          setIsVisible={setModalVisible}
          animation="slide"
        >
          <GradientThree style={{ height: screenHeight }}>
            <FlexFull style={{ paddingTop: 55, position: "relative" }}>
              <ScrollProgress height={screenHeight * 0.95}>
                <VStackFull
                  style={{
                    height: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 20,
                    paddingBottom: 20,
                  }}
                >
                  <VStackFull
                    style={{ alignItems: "center", paddingTop: 10, gap: 20 }}
                  >
                    <ModalContent />
                    <ModalContent />
                    <ModalContent />
                    <ModalContent />
                    <ModalContent />
                    <ModalContent />
                  </VStackFull>
                  <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    style={[
                      boxShadows.lg,
                      {
                        padding: 10,
                        width: 135,
                        backgroundColor: col[500],
                        borderRadius: 20,
                      },
                    ]}
                  >
                    <TextLg textColor={col[900]}>close me</TextLg>
                  </TouchableOpacity>
                </VStackFull>
              </ScrollProgress>
            </FlexFull>
          </GradientThree>
        </CustomModal>
      </CenterHorizontalFull>
    </VStackFull>
  );
}

export function AlertExample() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <CenterHorizontalFull>
      <TouchableOpacity
        onPress={() => setAlertVisible(true)}
        style={[
          boxShadows.lg,
          {
            padding: 10,
            width: 165,
            backgroundColor: col[500],
            borderRadius: 20,
          },
        ]}
      >
        <TextMd textColor={col[900]}>Alert Example</TextMd>
      </TouchableOpacity>
      <CustomAlert
        isVisible={alertVisible}
        onClose={() => setAlertVisible(false)}
        includeImage={false}
        text="This is an alert. Are you sure you want to continue?"
        title="Alert Example"
      />
    </CenterHorizontalFull>
  );
}

function Content({
  pageNumber,
  bg = col[700],
}: {
  pageNumber: number;
  bg?: string;
}) {
  return (
    <View
      style={[
        boxShadows.xl,
        borders.borderSm500,
        {
          padding: 80,
          backgroundColor: bg,
          borderRadius: 20,
        },
      ]}
    >
      <TextLg>Element {pageNumber}</TextLg>
    </View>
  );
}

const swipablePages = [
  <Content pageNumber={1} />,
  <Content pageNumber={2} />,
  <Content pageNumber={3} />,
  <Content pageNumber={4} />,
  <Content pageNumber={5} />,
  <Content pageNumber={6} />,
  <Content pageNumber={7} />,
  <Content pageNumber={8} />,
];

const swipablePagesTwo = [
  <Content pageNumber={1} bg={col[600]} />,
  <Content pageNumber={2} bg={col[600]} />,
  <Content pageNumber={3} bg={col[600]} />,
  <Content pageNumber={4} bg={col[600]} />,
  <Content pageNumber={5} bg={col[600]} />,
  <Content pageNumber={6} bg={col[600]} />,
  <Content pageNumber={7} bg={col[600]} />,
  <Content pageNumber={8} bg={col[600]} />,
];

export function HorizontalPageSwipingExample() {
  return (
    <VStackFull style={{ alignItems: "center", gap: 10 }}>
      <HeadingMd>Horizontal Page Swiping Example</HeadingMd>
      <CenterHorizontalFull style={{ height: screenHeight / 2.3, padding: 10 }}>
        <CenterHorizontalFull
          style={[
            boxShadows.xl,
            borders.borderSm500,
            { backgroundColor: col[400], borderRadius: 20 },
          ]}
        >
          <HorizontalPageSwiper componentArray={swipablePages} />
        </CenterHorizontalFull>
      </CenterHorizontalFull>
    </VStackFull>
  );
}

export function VerticalPageSwipingExample() {
  return (
    <VStackFull style={{ alignItems: "center", gap: 10 }}>
      <HeadingMd>Vertical Page Swiping Example</HeadingMd>
      <CenterHorizontalFull style={{ height: screenHeight / 2.3, padding: 10 }}>
        <CenterHorizontalFull
          style={[
            boxShadows.xl,
            borders.borderSm500,
            { backgroundColor: col[400], borderRadius: 20 },
          ]}
        >
          <VerticalPageSwiper componentArray={swipablePagesTwo} />
        </CenterHorizontalFull>
      </CenterHorizontalFull>
    </VStackFull>
  );
}

export function CustomExpandableTextExample() {
  return (
    <VStackFull style={{ alignItems: "center", gap: 10 }}>
      <CenterHorizontalFull>
        <HeadingLg>Expandable Content: Text</HeadingLg>
      </CenterHorizontalFull>
      <CustomExpandable
        expandedHeader="This is the expanded header"
        mainHeader="Collapsed Header"
        expandedContent="Expanded Content: This is longer content that is shown when the component is expanded. It can be any length and contain any text content or other components, since the type on the expanded content prop is React.ReactNode or string."
        collapsedContent="Collapsed Content"
      />
    </VStackFull>
  );
}

export function CustomExpandableImageExample() {
  return (
    <VStackFull style={{ alignItems: "center", gap: 10 }}>
      <CenterHorizontalFull>
        <HeadingLg>Expandable Content: Image</HeadingLg>
      </CenterHorizontalFull>
      <CustomExpandable
        mainHeader="Check out this image!"
        expandedContent={
          <CenterHorizontalFull>
            <CustomImage
              source={imageExample1}
              width={screenWidth * 0.9}
              height={screenWidth * 0.9}
              border={borders.borderXs800}
            />
          </CenterHorizontalFull>
        }
      />
    </VStackFull>
  );
}

export function ImageWithModalExample() {
  const images = [imageExample2, imageExample3, imageExample4];
  return (
    <VStackFull style={{ alignItems: "center", gap: 10 }}>
      <CenterHorizontalFull>
        <HeadingLg>Images with Modal</HeadingLg>
      </CenterHorizontalFull>
      <WrapFull style={{ justifyContent: "space-evenly" }}>
        {images.map((image) => (
          <ImageWithModal
            key={image}
            source={image}
            width={screenWidth * 0.3}
            height={screenWidth * 0.3}
            border={borders.borderXs800}
          />
        ))}
      </WrapFull>
    </VStackFull>
  );
}

export function ExpandableImageExample() {
  const images = [imageExample5, imageExample1, imageExample2];
  return (
    <VStackFull style={{ alignItems: "center", gap: 10 }}>
      <HeadingLg>Expandable Images</HeadingLg>
      <VStackFull style={{ alignItems: "center", gap: 20 }}>
        {images.map((image) => (
          <CenterHorizontalFull key={image}>
            <ExpandableImage key={image} image={image} />
          </CenterHorizontalFull>
        ))}
      </VStackFull>
    </VStackFull>
  );
}

export function CustomImageBackgroundExample() {
  return (
    <VStackFull style={{ alignItems: "center", gap: 10 }}>
      <HeadingLg>Custom Image Background</HeadingLg>
      <View style={{ height: screenWidth * 0.95, width: screenWidth * 0.95 }}>
        <CustomImageBackground
          image={imageExample2}
          borderRadius={20}
          style={[boxShadows.lg]}
        >
          <Heading2xl textColor={col[200]} textShadow={textShadows.rightLg}>
            This is my content
          </Heading2xl>
        </CustomImageBackground>
      </View>
    </VStackFull>
  );
}

export function SegmentedButtonBarExample() {
  const buttonItems = [
    { text: "Button 1", onPress: () => console.log("Button 1 pressed") },
    { text: "Button 2", onPress: () => console.log("Button 2 pressed") },
    { text: "Button 3", onPress: () => console.log("Button 3 pressed") },
    { text: "Button 4", onPress: () => console.log("Button 4 pressed") },
  ];
  return (
    <VStackFull style={{ alignItems: "center", gap: 10 }}>
      <CenterHorizontalFull>
        <HeadingLg>Segmented Button Bar</HeadingLg>
      </CenterHorizontalFull>
      <CenterHorizontalFull>
        <SegmentedButtonBar buttonArray={buttonItems} />
      </CenterHorizontalFull>
    </VStackFull>
  );
}

export function BottomSheetExample() {
  return (
    <>
      <CenterHorizontalFull>
        <HeadingLg>Bottom Sheet Example</HeadingLg>
      </CenterHorizontalFull>
      <BottomSheet>
        <TextXl textColor={col[900]}> I am the bottom sheet content!</TextXl>
      </BottomSheet>
    </>
  );
}

export function BouncingDotsExample() {
  return (
    <VStackFull style={{ alignItems: "center", gap: 10 }}>
      <CenterHorizontalFull>
        <HeadingLg>Bouncing Dots Indicator</HeadingLg>
      </CenterHorizontalFull>
      <BouncingDots />
    </VStackFull>
  );
}

export function ShiftingImagesExample() {
  const imagesArray = [
    imageExample1,
    imageExample2,
    imageExample3,
    imageExample4,
  ];
  return (
    <VStackFull style={{ alignItems: "center", gap: 10 }}>
      <HeadingLg>Shifting Images</HeadingLg>
      <CenterHorizontalFull>
        <ShiftingImages imageArray={imagesArray} />
      </CenterHorizontalFull>
    </VStackFull>
  );
}

export function ShiftingComponentsExample() {
  function TextBox({
    label,
    bg = col[500],
    textColor = col[100],
  }: {
    label: string;
    bg?: string;
    textColor?: string;
  }) {
    return (
      <View
        style={[
          boxShadows.xl,
          borders.borderLg300,
          {
            alignItems: "center",
            justifyContent: "center",
            width: screenWidth * 0.9,
            height: screenWidth * 0.5,
            backgroundColor: bg,
            borderRadius: 20,
          },
        ]}
      >
        <Text
          style={[
            textShadows.rightLg,
            {
              fontSize: 35,
              textAlign: "center",
              color: textColor,
            },
          ]}
        >
          Component: {label}
        </Text>
      </View>
    );
  }
  const componentArray = [
    <TextBox label="1" bg={col[900]} />,
    <TextBox label="2" bg={col[800]} />,
    <TextBox label="3" bg={col[700]} />,
    <TextBox label="4" bg={col[600]} />,
    <TextBox label="5" bg={col[500]} />,
  ];

  return (
    <VStackFull style={{ gap: 10 }}>
      <CenterHorizontalFull>
        <HeadingLg>Shifting Components</HeadingLg>
      </CenterHorizontalFull>
      <CenterHorizontalFull>
        <ShiftingComponents components={componentArray} />
      </CenterHorizontalFull>
    </VStackFull>
  );
}
