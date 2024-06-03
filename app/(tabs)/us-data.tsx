// DataScreen.tsx

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from "react-native";
import { getData, DataItem } from "@/services/usDataAPI";

const DataScreen: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {
          drilldowns: "Nation",
          measures: "Population",
        };
        const result = await getData(params);
        setData(result.data);
      } catch (error) {
        setError(error as any);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />
    );
  }

  if (error) {
    return <Text style={styles.error}>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Data from Data USA API</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.ID}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Year: {item.Year}</Text>
            <Text>Nation: {item.Nation}</Text>
            <Text>Population: {item.Population}</Text>
          </View>
        )}
      />
    </View>
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
