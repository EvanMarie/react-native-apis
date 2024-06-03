import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { getBreeds, getRandomCatImage } from "@/services/catAPI";
import { FlashList, FlashListProps } from "@shopify/flash-list";
import { GradientSeven } from "@/constants/Gradients";
import CustomImage from "@/custom-components/image";
import { screenWidth } from "@/constants/variousConstants";
import {
  CenterHorizontalFull,
  Flex,
  VStackFull,
} from "@/custom-components/containers";
import MyButton from "@/custom-components/button";
import { HeadingXl } from "@/custom-components/textComponents";
import CatListCard from "@/projectComponents/catListCard";

export default function App() {
  const [breeds, setBreeds] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [catImage, setCatImage] = useState<string>("");

  useEffect(() => {
    fetchBreeds();
    fetchCatImage();
  }, []);

  const fetchBreeds = async () => {
    setLoading(true);
    try {
      const fetchedBreeds = await getBreeds();
      setBreeds(fetchedBreeds);
    } catch (error) {
      console.error("Error fetching breeds:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCatImage = async () => {
    try {
      const fetchedImage = await getRandomCatImage();
      setCatImage(fetchedImage.url);
    } catch (error) {
      console.error("Error fetching cat image:", error);
    }
  };

  const renderItem: FlashListProps<any>["renderItem"] = ({ item }) => {
    return <CatListCard item={item} />;
  };

  return (
    <GradientSeven style={{ paddingTop: 55, flex: 1 }}>
      <VStackFull style={{ gap: 15, paddingTop: 10 }}>
        <CenterHorizontalFull style={{ gap: 20 }}>
          <HeadingXl padding={0}>Random Cat</HeadingXl>
          <Flex>
            <MyButton
              icon="refresh-outline"
              text="New Cat"
              onPress={fetchCatImage}
            />
          </Flex>
        </CenterHorizontalFull>
        {catImage ? (
          <CenterHorizontalFull>
            <CustomImage
              source={{ uri: catImage }}
              style={{ width: screenWidth * 0.7, height: screenWidth * 0.7 }}
              objectFit="cover"
            />
          </CenterHorizontalFull>
        ) : null}
      </VStackFull>
      <CenterHorizontalFull>
        <HeadingXl style={styles.header}>Cat Breeds</HeadingXl>
      </CenterHorizontalFull>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlashList
          data={breeds}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          estimatedItemSize={250}
        />
      )}
    </GradientSeven>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
});
