import { Dimensions, FlexAlignType, ViewStyle } from "react-native";

export const screenHeight = Dimensions.get("window").height;
export const screenWidth = Dimensions.get("window").width;

export const fullCenteredFlex = {
  flex: 1,
  display: "flex" as "flex",
  flexDirection: "column" as "column",
  alignItems: "center" as FlexAlignType,
  width: "100%" as ViewStyle["width"],
  height: "100%" as ViewStyle["height"],
};
