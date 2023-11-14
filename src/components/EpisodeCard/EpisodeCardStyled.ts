import styled from "styled-components";
import {
  themeColors,
  themeFontsSize,
  themeTypography,
} from "../../styles/themes/mainTheme";

const EpisodeCardStyled = styled.article`
  max-width: 350px;
  color: ${themeColors.dark};
  background-color: ${themeColors.darkGrey};

  span {
    color: ${themeColors.lightGrey};
    font-family: ${themeTypography.secondary};
    font-size: ${themeFontsSize.medium};
  }

  .episode {
    &__title {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 10px 20px;
      font-size: ${themeFontsSize.medium};
      background-color: ${themeColors.primary};
    }

    &__image {
      width: 100%;
      object-fit: cover;
      height: 267px;
    }

    &__data {
      padding: 20px;
      padding-bottom: 0;
      text-align: center;
    }

    &__name {
      display: block;
      text-align: center;
      padding-bottom: 5px;
      border-bottom: 1px solid ${themeColors.secondaryTransparent};
    }

    &__seasion-container {
      display: flex;
      justify-content: space-around;
      gap: 20px;
      padding-top: 10px;
    }

    &__air-container {
      display: flex;
      flex-direction: column;
      text-align: center;
      padding: 20px;
    }

    &__air-title {
      padding-bottom: 5px;
      border-bottom: 1px solid ${themeColors.secondaryTransparent};
    }

    &__air-data {
      padding-top: 10px;
    }
  }
`;

export default EpisodeCardStyled;
