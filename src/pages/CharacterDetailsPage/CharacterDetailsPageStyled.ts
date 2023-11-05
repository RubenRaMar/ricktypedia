import styled from "styled-components";
import PageStyled from "../../styles/shared/PageStyled";
import { themeColors } from "../../styles/themes/mainTheme";
import pixelToRem from "../../styles/functions/pixelToRem";

const CharacterDetailsPageStyled = styled(PageStyled)`
  margin: 0 auto;
  max-width: 800px;

  .character {
    &__image {
      max-width: 600px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px 5px 0 0;
      border: 2px solid ${themeColors.tertiary};
      box-shadow: inset 0px 0px 6px 2px ${themeColors.tertiaryTransparent};
    }

    &__data {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      background-color: ${themeColors.darkTransparent};
      border: 2px solid ${themeColors.tertiary};
      box-shadow: inset 0px 0px 3px 1px ${themeColors.tertiaryTransparent};
      border-block-start: none;
      gap: 5px;
      max-width: 600px;
      width: 100%;
      padding: 10px;
    }

    &__key {
      width: fit-content;
      font-size: ${pixelToRem(18)};
    }
  }

  @media (max-width: 450px) {
    .character {
      &__data {
        flex-direction: column;
        gap: 10px;
      }
    }
  }
`;

export default CharacterDetailsPageStyled;
