import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: 'home',
};

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async() => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <Stack onLayout={onLayoutRootView}/>
  )
}

export default Layout;