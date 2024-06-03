import { useEffect, useState } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const useLoadFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await SplashScreen.preventAutoHideAsync();
    await Font.loadAsync({
      Play: require("@/assets/fonts/Play/Play-Regular.ttf"),
      "Play-Bold": require("@/assets/fonts/Play/Play-Bold.ttf"),
    });
    setFontsLoaded(true);
    await SplashScreen.hideAsync();
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return fontsLoaded;
};

export default useLoadFonts;
