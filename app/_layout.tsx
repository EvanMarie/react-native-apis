import React, { useEffect, useState } from "react";
import { setCustomText } from "react-native-global-props";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Platform, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import useLoadFonts from "@/hooks/useLoadFonts";

SplashScreen.preventAutoHideAsync();

const RootLayout: React.FC = () => {
  const fontsLoaded = useLoadFonts();
  const colorScheme = useColorScheme();
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        const customTextProps = {
          style: {
            fontFamily: Platform.select({
              ios: "System",
              android: "Roboto",
            }),
          },
        };
        setCustomText(customTextProps);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  if (!fontsLoaded || !appIsReady) {
    return null;
  }

  if (!fontsLoaded || !appIsReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar animated={true} />
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="design" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};
export default RootLayout;
