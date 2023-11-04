import styled from "styled-components";
import PageStyled from "../../styles/shared/PageStyled";
import { themeColors } from "../../styles/themes/mainTheme";

const CharactersPageStyled = styled(PageStyled)`
  .search-feedback {
    margin-block-start: 10px;
    background-color: ${themeColors.darkTransparent};
    text-align: center;
  }
`;

export default CharactersPageStyled;
