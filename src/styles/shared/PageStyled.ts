import styled from "styled-components";
import { themeColors, themeFontsSize } from "../themes/mainTheme";

const PageStyled = styled.main`
  h1 {
    width: 100%;
    padding-block: 10px;
    text-align: center;
    color: ${themeColors.primary};
    background-color: ${themeColors.darkTransparent};
    font-size: ${themeFontsSize.large};
    border: 1px solid ${themeColors.tertiary};
    border-radius: 15px;
  }
`;

export default PageStyled;
