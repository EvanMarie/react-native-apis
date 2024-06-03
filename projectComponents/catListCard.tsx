import { screenHeight, screenWidth } from "@/constants/variousConstants";
import {
  CenterHorizontalFull,
  Flex,
  FlexFull,
  VStack,
  VStackFull,
} from "@/custom-components/containers";
import CustomImage from "@/custom-components/image";
import MyModal from "@/custom-components/modal";
import { HeadingSm, TextSm, TextXs } from "@/custom-components/textComponents";
import { useState } from "react";
import { View } from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import CustomIconButton from "@/custom-components/iconButton";
import MyButton from "@/custom-components/button";
import { GradientEight } from "@/constants/Gradients";
import { LinearGradient } from "expo-linear-gradient";
import { col } from "@/constants/Colors";
import { borders } from "@/constants/BorderStyles";
import { boxShadows } from "@/constants/ShadowStyles";

export default function CatListCard({ item }: { item: any }) {
  const styles = StyleSheet.create({
    item: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
      marginBottom: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
    },
  });

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <TouchableOpacity onPress={() => setModalOpen(true)}>
        <View style={styles.item}>
          <FlexFull style={{ paddingHorizontal: 5 }}>
            <CustomImage
              source={item.image}
              width={screenWidth * 0.2}
              height={screenWidth * 0.2}
              objectFit="cover"
            />
            <VStack style={{ width: screenWidth * 0.7, paddingHorizontal: 10 }}>
              <HeadingSm padding={0} style={styles.title}>
                {item.name}
              </HeadingSm>
              <Flex>
                <TextXs padding={0} numberOfLines={3}>
                  {item.description}
                </TextXs>
              </Flex>
            </VStack>
          </FlexFull>
        </View>
      </TouchableOpacity>
      <MyModal isVisible={modalOpen} setIsVisible={setModalOpen}>
        <CenterHorizontalFull>
          <LinearGradient
            colors={[col[700], col[800]]}
            style={[
              borders.borderSm300,
              boxShadows.glowMd800,
              {
                width: screenWidth * 0.95,
                borderRadius: 20,
                paddingVertical: 10,
              },
            ]}
          >
            <VStackFull style={{ alignItems: "center", gap: 20 }}>
              <CenterHorizontalFull>
                <VStackFull style={{ gap: 20, alignItems: "center" }}>
                  <CustomImage
                    source={item.image}
                    objectFit="cover"
                    width={screenWidth * 0.9}
                  />
                  <VStack
                    style={{
                      width: screenWidth * 0.9,
                      paddingHorizontal: 10,
                      gap: 20,
                    }}
                  >
                    <HeadingSm padding={0} style={styles.title}>
                      {item.name}
                    </HeadingSm>
                    <Flex>
                      <TextSm padding={0}>{item.description}</TextSm>
                    </Flex>
                  </VStack>
                </VStackFull>
              </CenterHorizontalFull>
              <Flex>
                <MyButton text="Close" onPress={() => setModalOpen(false)} />
              </Flex>
            </VStackFull>
          </LinearGradient>
        </CenterHorizontalFull>
      </MyModal>
    </>
  );
}
