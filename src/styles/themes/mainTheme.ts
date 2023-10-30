import { DefaultTheme } from "styled-components";
import pixelToRem from "../functions/pixelToRem.js";

const mainTheme: DefaultTheme = {
  colors: {
    primary: "#009a38",
    secondary: "#d2dc00",
    secondaryTransparent: "#d2dc00eb",
    tertiary: "#7cbd28",
    tertiaryTransparent: "#7cbd28d9",
    light: "#d0d0d0",
    lightGrey: "#8a8888",
    dark: "#000",
    darkTransparent: "#070707bd",
    darkGrey: "#141414",
    mainBackground: "#0d0d0d",
    secondaryBackground: "#070707",
  },
  typography: {
    primary: '"Lexend", sans-serif',
    secondary: '"Playpen Sans", cursive',
  },
  fontsSize: {
    small: `${pixelToRem(16)}`,
    medium: `${pixelToRem(20)}`,
    large: `${pixelToRem(30)}`,
  },
};

export const {
  colors: themeColors,
  fontsSize: themeFontsSize,
  typography: themeTypography,
} = mainTheme;

export default mainTheme;
