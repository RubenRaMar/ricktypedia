import styled from "styled-components";
import {
  themeColors,
  themeFontsSize,
  themeTypography,
} from "../../styles/themes/mainTheme";

const EpisodeCardStyled = styled.article`
  max-width: 350px;
  text-align: center;
  color: ${themeColors.dark};
  background-color: ${themeColors.darkGrey};
  border: 1px solid #747a0547;

  .episode {
    &__title {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 70px;
      padding: 10px 20px;
      font-size: ${themeFontsSize.medium};
      background-color: ${themeColors.primary};
    }

    &__image {
      width: 100%;
      object-fit: cover;
      height: 267px;
    }

    &__data-container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      color: ${themeColors.lightGrey};
      font-family: ${themeTypography.secondary};
      font-size: ${themeFontsSize.medium};
      padding: 20px;
    }

    &__name {
      display: block;
      padding-block-end: 5px;
      border-block-end: 1px solid ${themeColors.secondaryTransparent};
    }

    &__data {
      display: flex;
      justify-content: space-around;
      gap: 20px;
      padding-block-start: 10px;
    }
  }
`;

export default EpisodeCardStyled;
