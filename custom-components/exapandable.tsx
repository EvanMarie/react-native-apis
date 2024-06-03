import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { col } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { CenterHorizontalFull, FlexFull, VStackFull } from "./containers";
import { boxShadows, textShadows } from "@/constants/ShadowStyles";
import { borders } from "@/constants/BorderStyles";

export default function MyExpandable({
  mainHeader,
  expandedHeader,
  expandedContent,
  containerPadding = 8,
  collapsedContent,
  containerStyle = {},
  headerStyle = { fontSize: 20, fontWeight: "bold" },
  contentStyle = {},
  boxShadow = boxShadows.md,
  border = borders.borderSm800,
  bg = col[200],
  borderRadius = 5,
  paddingHorizontal = 12,
  paddingVertical = 8,
  headerColor = col[700],
  headerSize = 20,
  headerTextShadow = textShadows.glow100Md,
  collapsedContentColor = col[800],
  collapsedContentTextShadow = "",
  collapsedContentSize = 13,
  expandedContentColor = col[800],
  expandedContentTextShadow = "",
  expandedContentSize = 18,
}: {
  mainHeader: React.ReactNode;
  expandedHeader?: React.ReactNode;
  expandedContent: React.ReactNode | string;
  collapsedContent?: React.ReactNode;
  containerStyle?: any;
  containerPadding?: number;
  headerStyle?: any;
  contentStyle?: any;
  style?: any;
  boxShadow?: any;
  border?: any;
  bg?: any;
  borderRadius?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  headerColor?: string;
  headerTextShadow?: any;
  headerSize?: number;
  collapsedContentColor?: string;
  collapsedContentTextShadow?: string;
  collapsedContentSize?: number;
  expandedContentColor?: string;
  expandedContentTextShadow?: string;
  expandedContentSize?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const showExpandedHeader = expandedHeader ? expandedHeader : mainHeader;
  return (
    <CenterHorizontalFull style={{ paddingHorizontal: containerPadding }}>
      <VStackFull
        style={[
          containerStyle,
          boxShadow,
          border,
          { backgroundColor: bg, borderRadius: borderRadius },
        ]}
      >
        <TouchableOpacity
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: paddingHorizontal,
            paddingVertical: paddingVertical,
          }}
          onPress={() => setExpanded(!expanded)}
        >
          <Text
            style={[
              headerStyle,
              headerTextShadow,
              { color: headerColor, fontSize: headerSize },
            ]}
          >
            {expanded ? showExpandedHeader : mainHeader}
          </Text>
          <Ionicons
            name={
              expanded ? "chevron-collapse-outline" : "chevron-expand-outline"
            }
            size={headerSize + 3}
            color={headerColor}
          />
        </TouchableOpacity>
        {collapsedContent && !expanded && (
          <FlexFull
            style={{
              paddingHorizontal: paddingHorizontal,
              paddingBottom: paddingVertical,
            }}
          >
            <Text
              style={[
                contentStyle,
                collapsedContentTextShadow,
                {
                  fontSize: collapsedContentSize,
                  color: collapsedContentColor,
                },
              ]}
            >
              {collapsedContent}
            </Text>
          </FlexFull>
        )}
        {expanded && (
          <FlexFull
            style={{
              paddingHorizontal: paddingHorizontal,
              paddingBottom: paddingVertical,
            }}
          >
            {typeof expandedContent === "string" ? (
              <Text
                style={[
                  contentStyle,
                  expandedContentTextShadow,
                  {
                    fontSize: expandedContentSize,
                    color: expandedContentColor,
                  },
                ]}
              >
                {expandedContent}
              </Text>
            ) : (
              <>{expandedContent}</>
            )}
          </FlexFull>
        )}
      </VStackFull>
    </CenterHorizontalFull>
  );
}
