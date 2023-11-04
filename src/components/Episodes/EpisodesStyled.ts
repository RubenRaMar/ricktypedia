import styled from "styled-components";
import { themeColors, themeFontsSize } from "../../styles/themes/mainTheme";

const EpisodesStyled = styled.article`
  max-width: 600px;
  width: 100%;

  svg {
    font-size: ${themeFontsSize.large};
    color: ${themeColors.tertiary};
  }

  .episodes {
    &__episodes-list {
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

    &__episode {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      border: 2px solid ${themeColors.tertiary};
      background-color: ${themeColors.darkTransparent};
      box-shadow: inset 0px 0px 3px 1px ${themeColors.tertiaryTransparent};
      border-radius: 5px;
    }
  }
`;

export default EpisodesStyled;
