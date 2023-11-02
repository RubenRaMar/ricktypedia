import styled from "styled-components";
import { themeColors } from "../../styles/themes/mainTheme";

const SearchStyled = styled.form`
  input {
    width: 300px;
    height: 40px;
    padding-inline-start: 10px;
    border-radius: 5px 0 0 5px;
    color: ${themeColors.light};
    background-color: ${themeColors.darkTransparent};
    border: 2px solid ${themeColors.tertiaryTransparent};

    &:focus-visible {
      outline: none;
      box-shadow: inset 0px 0px 3px 1px ${themeColors.tertiaryTransparent};
    }
  }

  input {
    @media (max-width: 420px) {
      width: 197px;
    }
  }
`;

export default SearchStyled;
