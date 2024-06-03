import { col } from "@/constants/Colors";
import { FlexFull, VStack } from "./containers";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { usePathname, useRouter } from "expo-router";
import { bordersT } from "@/constants/BorderStyles";
import { screenWidth } from "@/constants/variousConstants";
import { LinearGradient } from "expo-linear-gradient";
import { boldAccentFont } from "@/constants/FontVariables";

type navItemType = {
  inactiveIcon?: string;
  activeIcon?: string;
  label: string;
  pathname: string;
};

function NavItem({
  activeIcon,
  inactiveIcon,
  iconSize = 23,
  inactiveIconColor = col[790],
  activeIconColor = col[900],
  label,
  pathname,
}: {
  activeIcon?: string;
  inactiveIcon?: string;
  iconSize?: number;
  inactiveIconColor?: string;
  activeIconColor?: string;
  label: string;
  pathname: string;
}) {
  const router = useRouter();
  const currentRoute = usePathname();
  const isActive = currentRoute === pathname;

  return (
    <TouchableOpacity onPress={() => router.push(pathname)}>
      <VStack style={{ alignItems: "center" }}>
        {inactiveIcon && (
          <Ionicons
            name={isActive ? activeIcon : (inactiveIcon as any)}
            size={iconSize}
            color={isActive ? activeIconColor : inactiveIconColor}
          />
        )}
        <Text
          style={{
            fontFamily: boldAccentFont,
            fontSize: 12,
            padding: 0,
            color: isActive ? activeIconColor : inactiveIconColor,
          }}
        >
          {label}
        </Text>
      </VStack>
    </TouchableOpacity>
  );
}

export default function MyNavBar({
  // bg = col[700],
  borderTop = bordersT.borderTxs700,
  height = 60,
  navItems,
}: {
  // bg?: string;
  borderTop?: any;
  height?: number;
  navItems: navItemType[];
}) {
  return (
    <LinearGradient
      colors={[col[600], col[500]]}
      style={[
        borderTop,
        {
          display: "flex",
          width: screenWidth,
          height: height,
          paddingHorizontal: 10,
          paddingVertical: 5,
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: 1,
        },
      ]}
    >
      <FlexFull
        style={[
          {
            justifyContent: "space-around",
          },
        ]}
      >
        {navItems.map((navItem, index) => (
          <NavItem
            key={index}
            activeIcon={navItem.activeIcon}
            inactiveIcon={navItem.inactiveIcon}
            label={navItem.label}
            pathname={navItem.pathname}
          />
        ))}
      </FlexFull>
    </LinearGradient>
  );
}
