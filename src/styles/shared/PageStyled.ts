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
    border-radius: 15px;
  }
`;

export default PageStyled;
