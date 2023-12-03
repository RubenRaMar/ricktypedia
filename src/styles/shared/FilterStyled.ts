import styled from "styled-components";
import { themeColors } from "../themes/mainTheme";

const FilterStyled = styled.article`
  display: flex;

  input,
  select {
    width: 100%;
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
`;

export default FilterStyled;
