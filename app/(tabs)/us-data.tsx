// DataScreen.tsx

import React, { useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from "react-native";
import useDataUSA from "@/hooks/useUsaData";
import {
  CenterHorizontalFull,
  FlexFull,
  VStackFull,
} from "@/custom-components/containers";
import { LinearGradient } from "expo-linear-gradient";
import { col } from "@/constants/Colors";
import MyButton from "@/custom-components/button";

const DataScreen: React.FC = () => {
  const [params, setParams] = useState({
    drilldowns: "Nation",
    measures: "Population",
  });
  const { data, loading, error } = useDataUSA(params);

  const changeParams = (newParams: Record<string, string>) => {
    setParams(newParams as any);
  };

  if (loading) {
    return (
      <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />
    );
  }

  if (error) {
    return <Text style={styles.error}>Error: {error.message}</Text>;
  }

  return (
    <LinearGradient
      style={{ paddingTop: 55, flex: 1 }}
      colors={[col[350], col[450]]}
    >
      <CenterHorizontalFull>
        <VStackFull>
          <Text style={styles.title}>Data from Data USA API</Text>
          <FlexFull>
            <MyButton
              text="Population"
              onPress={() =>
                changeParams({ drilldowns: "Nation", measures: "Population" })
              }
            />
            <MyButton
              text="State GDP"
              onPress={() =>
                changeParams({ drilldowns: "State", measures: "GDP" })
              }
            />
            <MyButton
              text="County Employment"
              onPress={() =>
                changeParams({ drilldowns: "County", measures: "Employment" })
              }
            />
          </FlexFull>
          {data && (
            <FlatList
              data={data}
              keyExtractor={(item) => item.ID}
              renderItem={({ item }) => (
                <View style={styles.item} key={item.ID}>
                  <Text>Year: {item.Year}</Text>
                  <Text>Nation: {item.Nation}</Text>
                  <Text>Population: {item.Population.toLocaleString()}</Text>
                </View>
              )}
            />
          )}
        </VStackFull>
      </CenterHorizontalFull>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    color: "red",
    textAlign: "center",
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default DataScreen;
