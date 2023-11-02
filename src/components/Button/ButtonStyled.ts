import styled from "styled-components";
import { themeColors } from "../../styles/themes/mainTheme";

const ButtonStyled = styled.button`
  width: 160px;
  height: 50px;
  font-weight: 700;
  color: ${themeColors.tertiary};
  background-color: ${themeColors.darkTransparent};
  border: 2px solid ${themeColors.tertiaryTransparent};
  border-radius: 10px;
  text-transform: uppercase;
  box-shadow: inset 0px 0px 6px 2px ${themeColors.tertiaryTransparent};

  &.button {
    &--small {
      font-weight: 100;
      box-shadow: none;
      border-inline-start: 0;
      border-radius: 0 5px 5px 0;
      font-size: 1rem;
      width: 40px;
      height: 40px;
    }

    &:focus-visible {
      outline: none;
      box-shadow: inset 0px 0px 3px 1px ${themeColors.tertiaryTransparent};
    }

    &:disabled {
      opacity: 0.5;
    }
  }
`;

export default ButtonStyled;
