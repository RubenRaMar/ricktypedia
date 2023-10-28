import "styled-components";

interface ColorsStructure {
  primary: string;
  secondary: string;
  tertiary: string;
  dark: "#000";
  darkGrey: "#141414";
  mainBackground: "#0d0d0d";
  secondaryBackground: "#070707";
  light: "#d0d0d0";
  lightGrey: "#8a8888";
}

interface TypographyStructure {
  primary: string;
  secondary: string;
}

interface FontsSizeStructure {
  large: string;
  medium: string;
  small: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsStructure;
    typography: TypographyStructure;
    fontsSize: FontsSizeStructure;
  }
}
