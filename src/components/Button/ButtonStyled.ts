import styled from "styled-components";
import { themeColors, themeFontsSize } from "../../styles/themes/mainTheme";
import pixelToRem from "../../styles/functions/pixelToRem";

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
    .down-arrow {
      color: inherit;
      transition: all 0.38s step-end;
    }

    &--small {
      font-weight: 100;
      box-shadow: none;
      border-inline-start: 0;
      border-radius: 0 5px 5px 0;
      font-size: ${themeFontsSize.small};
      width: 40px;
      height: 40px;
    }

    &--medium {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: fit-content;
      border: none;
      background-color: ${themeColors.darkGrey};
      box-shadow: none;
      border-block-start: none;
      padding: 10px;
      font-size: ${pixelToRem(18)};
      font-weight: 100;
      text-transform: capitalize;
      color: ${themeColors.light};
      border-radius: 0;
    }

    &--medium-expanded {
      .down-arrow {
        transition: all 0.2s step-start;
        rotate: 180deg;
      }
    }

    &:focus-visible {
      outline: none;
      box-shadow: inset 0 0 3px 1px ${themeColors.tertiaryTransparent};
    }

    &:disabled {
      opacity: 0.5;
    }
  }
`;

export default ButtonStyled;
