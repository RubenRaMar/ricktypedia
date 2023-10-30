import styled from "styled-components";
import {
  themeColors,
  themeFontsSize,
  themeTypography,
} from "../../styles/themes/mainTheme";

const CharacterCardStyled = styled.article`
  background-image: url(/images/bacgroundcard.webp);
  background-size: contain;
  text-align: center;
  width: 280px;
  padding: 5px;
  border-radius: 10px;
  color: ${themeColors.dark};
  box-shadow: 0px 0px 6px 2px ${themeColors.secondaryTransparent};

  .character {
    &__name {
      font-size: ${themeFontsSize.medium};
      background-color: ${themeColors.secondaryTransparent};
      padding: 6px 10px;
    }

    &__location {
      font-family: ${themeTypography.secondary};
      margin-block: 15px;
    }

    &__location-image {
      margin-inline-end: 7px;
    }

    &__data {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 0 0 10px 10px;
      padding: 10px;
      background-color: ${themeColors.tertiaryTransparent};
    }

    &__image {
      width: 100%;
      object-fit: cover;
      height: 267px;
      border-radius: 10px 10px 0 0;
      box-shadow: 0px 0px 8px 1px #0000003b;
    }

    &__images-container {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default CharacterCardStyled;
