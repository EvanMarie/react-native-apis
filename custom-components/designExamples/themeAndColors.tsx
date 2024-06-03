import { borders } from "@/constants/BorderStyles";
import { col } from "@/constants/Colors";
import {
  GradientEight,
  GradientEleven,
  GradientFive,
  GradientFour,
  GradientNine,
  GradientOne,
  GradientSeven,
  GradientSix,
  GradientTen,
  GradientThree,
  GradientTwo,
} from "@/constants/Gradients";
import { boxShadows, textShadows } from "@/constants/ShadowStyles";
import {
  CenterHorizontalFull,
  VStackFull,
  WrapFull,
} from "@/custom-components/containers";

import { HeadingLg, TextSm, TextXs } from "@/custom-components/textComponents";

export function ThemeColors() {
  const colors = [
    { color: "col[100]", textColor: col[900], rgba: col[100] },
    { color: "col[200]", textColor: col[900], rgba: col[200] },
    {
      color: "col[300]]",
      textColor: col[900],
      rgba: col[300],
    },
    {
      color: "col[400]",
      textColor: col[900],
      rgba: col[400],
    },
    {
      color: "col[500]",
      textColor: col[900],
      rgba: col[500],
    },
    {
      color: "col[600]",
      textColor: col[900],
      rgba: col[600],
    },
    {
      color: "col[700]",
      textColor: col[100],
      rgba: col[700],
    },
    {
      color: "col[800]",
      textColor: col[100],
      rgba: col[800],
    },
    {
      color: "col[900]",
      textColor: col[100],
      rgba: col[900],
    },
  ];
  return (
    <VStackFull style={{ paddingVertical: 10, alignItems: "center" }}>
      <HeadingLg>Theme Colors</HeadingLg>
      <WrapFull
        style={{ padding: 10, gap: 15, justifyContent: "space-evenly" }}
      >
        {colors.map((color, index) => {
          return (
            <VStackFull
              key={index}
              style={[
                borders.borderXs100,
                boxShadows.xl,
                {
                  backgroundColor: color.rgba,
                  height: 85,
                  width: 85,
                  borderRadius: 10,
                },
              ]}
            >
              <CenterHorizontalFull>
                <TextXs textColor={color.textColor} style={{ fontWeight: 600 }}>
                  {color.color}
                </TextXs>
              </CenterHorizontalFull>
            </VStackFull>
          );
        })}
      </WrapFull>
    </VStackFull>
  );
}

export function ThemeGradients() {
  const colors = [
    {
      name: "GradientOne",
      textShadow: textShadows.glow100Md,
      textColor: col[900],
      gradient: GradientOne,
    },
    {
      name: "GradientTwo",
      textShadow: textShadows.glow100Md,
      textColor: col[900],
      gradient: GradientTwo,
    },
    {
      name: "GradientThree",
      textShadow: textShadows.glow100Md,
      textColor: col[900],
      gradient: GradientThree,
    },
    {
      name: "GradientFour",
      textShadow: textShadows.glow100Md,
      textColor: col[900],
      gradient: GradientFour,
    },
    {
      name: "GradientFive",
      textShadow: textShadows.rightLg,
      textColor: col[100],
      gradient: GradientFive,
    },
    {
      name: "GradientSix",
      textShadow: textShadows.rightLg,
      textColor: col[100],
      gradient: GradientSix,
    },
    {
      name: "GradientSeven",
      textShadow: textShadows.rightLg,
      textColor: col[100],
      gradient: GradientSeven,
    },
    {
      name: "GradientEight",
      textShadow: textShadows.rightLg,
      textColor: col[100],
      gradient: GradientEight,
    },
    {
      name: "GradientNine",
      textShadow: textShadows.rightLg,
      textColor: col[100],
      gradient: GradientNine,
    },
    {
      name: "GradientTen",
      textShadow: textShadows.rightLg,
      textColor: col[100],
      gradient: GradientTen,
    },
    {
      name: "GradientEleven",
      textShadow: textShadows.rightLg,
      textColor: col[100],
      gradient: GradientEleven,
    },
  ];

  return (
    <VStackFull style={{ paddingVertical: 10, alignItems: "center" }}>
      <HeadingLg>Theme Gradients</HeadingLg>
      <WrapFull
        style={{ padding: 10, gap: 15, justifyContent: "space-evenly" }}
      >
        {colors.map((color, index) => {
          const Gradient = color.gradient;
          return (
            <VStackFull
              key={index}
              style={[
                borders.borderSm900,
                boxShadows.xl,
                {
                  height: 75,
                  width: 150,
                  borderRadius: 10,
                },
              ]}
            >
              <Gradient
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <CenterHorizontalFull>
                  <TextSm
                    textColor={color.textColor}
                    style={[
                      color.textShadow,
                      {
                        width: "100%",
                        fontWeight: 600,
                        textAlign: "center",
                      },
                    ]}
                  >
                    {color.name}
                  </TextSm>
                </CenterHorizontalFull>
              </Gradient>
            </VStackFull>
          );
        })}
      </WrapFull>
    </VStackFull>
  );
}
