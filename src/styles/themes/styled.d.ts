import "styled-components";

interface ColorsStructure {
  primary: string;
  secondary: string;
  tertiary: string;
  dark: string;
  darkGrey: string;
  darkTransparent: string;
  mainBackground: string;
  secondaryBackground: string;
  light: string;
  lightGrey: string;
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
