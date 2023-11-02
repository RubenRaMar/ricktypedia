import styled from "styled-components";
import { themeColors, themeFontsSize } from "../themes/mainTheme";

const PageStyled = styled.main`
  h1 {
    margin-block: 50px;
    text-align: center;
    color: ${themeColors.tertiary};
    background-color: ${themeColors.darkTransparent};
    font-size: ${themeFontsSize.large};
    box-shadow: 0px 0px 11px 11px ${themeColors.darkTransparent};
    border-radius: 15px;
  }
`;

export default PageStyled;
