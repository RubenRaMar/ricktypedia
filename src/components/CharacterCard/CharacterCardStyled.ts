import styled from "styled-components";
import {
  themeColors,
  themeFontsSize,
  themeTypography,
} from "../../styles/themes/mainTheme";

const CharacterCardStyled = styled.article`
  max-width: 350px;
  text-align: center;
  color: ${themeColors.dark};
  border: 1px solid #747a0547;

  .character {
    &__name {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 70px;
      padding: 10px 20px;
      font-size: ${themeFontsSize.medium};
      background-color: ${themeColors.primary};
      border-bottom: 1px solid ${themeColors.darkGrey};
    }

    &__location {
      font-family: ${themeTypography.secondary};
    }

    &__location-image {
      margin-inline-end: 7px;
    }

    &__data {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 40px;
      font-weight: 600;
      padding: 15px;
      margin-top: -3px;
      background-color: ${themeColors.darkGrey};
      color: ${themeColors.lightGrey};
    }

    &__image {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    &__images-container {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default CharacterCardStyled;
