import { GradientFive } from "@/constants/Gradients";
import { screenHeight } from "@/constants/variousConstants";
import { FlexFull } from "@/custom-components/containers";
import MyNavBar from "@/custom-components/navBar";
import { Stack } from "expo-router";
import React from "react";

export default function TabLayout() {
  const mainNavItems = [
    {
      inactiveIcon: "home-outline",
      activeIcon: "home",
      label: "home",
      pathname: "/",
    },
    {
      inactiveIcon: "link-outline",
      activeIcon: "link",
      label: "cats",
      pathname: "/cats",
    },
    {
      inactiveIcon: "link-outline",
      activeIcon: "link",
      label: "US Data",
      pathname: "/us-data",
    },
    {
      inactiveIcon: "color-palette-outline",
      activeIcon: "color-palette",
      label: "design",
      pathname: "/design",
    },
  ];

  return (
    <FlexFull style={{ height: screenHeight }}>
      <GradientFive style={{ display: "flex", flex: 1, position: "relative" }}>
        <MyNavBar navItems={mainNavItems} />
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="cats" options={{ headerShown: false }} />
          <Stack.Screen name="us-data" options={{ headerShown: false }} />
        </Stack>
      </GradientFive>
    </FlexFull>
  );
}
