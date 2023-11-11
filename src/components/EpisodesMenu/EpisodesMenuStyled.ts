import styled from "styled-components";
import { themeColors, themeFontsSize } from "../../styles/themes/mainTheme";

const EpisodesMenuStyled = styled.article`
  max-width: 600px;
  width: 100%;

  svg {
    font-size: ${themeFontsSize.large};
    color: ${themeColors.tertiary};
  }

  .items {
    &__items-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(110px, 2fr));
      gap: 15px;
      padding-inline: 10px;
      max-height: 0;
      border: 0px solid ${themeColors.tertiary};
      overflow: hidden;
      transition: max-height 0.4s ease-in-out, padding 0.38s step-end,
        border 0.38s step-end, border-radius 0.38s step-end;

      &--visible {
        max-height: 2000px;
        border-radius: 0 0 10px 10px;
        border: 2px solid ${themeColors.tertiary};
        border-block-start: 0;
        padding-block: 10px;
        transition: max-height 0.4s ease-in-out;
      }
    }

    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      border: 2px solid ${themeColors.tertiary};
      background-color: ${themeColors.darkTransparent};
      box-shadow: inset 0px 0px 3px 1px ${themeColors.tertiaryTransparent};
      border-radius: 5px;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: #152502d9;
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
      }

      &:active {
        transform: scale(0.95);
        transition: all 0.1s ease-in-out;
      }
    }
  }
`;

export default EpisodesMenuStyled;
