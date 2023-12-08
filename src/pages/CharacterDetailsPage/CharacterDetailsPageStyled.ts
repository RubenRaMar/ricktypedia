import styled from "styled-components";
import PageStyled from "../../styles/shared/PageStyled";
import { themeColors } from "../../styles/themes/mainTheme";
import pixelToRem from "../../styles/functions/pixelToRem";

const CharacterDetailsPageStyled = styled(PageStyled)`
  margin: 0 auto;
  max-width: 400px;

  .data-container {
    width: 100%;
    border: 1px solid #7cbd28c7;
    border-radius: 0 0 5px 5px;
    overflow: hidden;
  }

  .character {
    &__image {
      max-width: 400px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px 5px 0 0;
      border: 1px solid ${themeColors.tertiaryTransparent};
    }

    &__data {
      display: flex;
      align-items: center;
      background-color: ${themeColors.darkGrey};
      border-bottom: 1px solid ${themeColors.tertiaryTransparent};
      border-block-start: none;
      gap: 5px;
      max-width: 600px;
      width: 100%;
      padding: 10px;
    }

    &__key {
      width: fit-content;
      font-size: ${pixelToRem(18)};
      flex: 1;
    }

    &__value {
      flex: 1;
      color: ${themeColors.lightGrey};
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
