import styled from "styled-components";
import { themeColors, themeFontsSize } from "../themes/mainTheme";

const PageStyled = styled.main`
  h1 {
    padding: 10px 100px;
    margin-block: 50px;
    text-align: center;
    color: ${themeColors.tertiary};
    background-color: ${themeColors.darkTransparent};
    font-size: ${themeFontsSize.large};
    border: 1px solid ${themeColors.tertiary};
    border-radius: 15px;
    box-shadow: 0px 0px 6px 1px ${themeColors.secondaryTransparent};
  }
`;

export default PageStyled;
