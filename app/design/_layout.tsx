import { GradientFive } from "@/constants/Gradients";
import { screenHeight } from "@/constants/variousConstants";
import { FlexFull } from "@/custom-components/containers";
import MyNavBar from "@/custom-components/navBar";
import { Stack } from "expo-router";
import React from "react";

export default function TabLayout() {
  const testNavItems = [
    {
      inactiveIcon: "home-outline",
      activeIcon: "home",
      label: "home",
      pathname: "/",
    },
    {
      inactiveIcon: "color-palette-outline",
      activeIcon: "color-palette",
      label: "theme",
      pathname: "/design/colors",
    },
    {
      inactiveIcon: "grid-outline",
      activeIcon: "grid",
      label: "components",
      pathname: "/design/components",
    },
    {
      inactiveIcon: "cog-outline",
      activeIcon: "cog",
      label: "testing",
      pathname: "/design/testing",
    },
  ];

  return (
    <FlexFull style={{ height: screenHeight }}>
      <GradientFive style={{ display: "flex", flex: 1, position: "relative" }}>
        <MyNavBar navItems={testNavItems} />
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="colors" options={{ headerShown: false }} />
          <Stack.Screen name="components" options={{ headerShown: false }} />
          <Stack.Screen name="testing" options={{ headerShown: false }} />
        </Stack>
      </GradientFive>
    </FlexFull>
  );
}
