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
  background-color: ${themeColors.darkTransparent};
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
      border-bottom: 1px solid ${themeColors.darkGrey};
    }

    &__image {
      width: 100%;
      object-fit: cover;
      height: 267px;
    }

    &__data-container {
      display: flex;
      flex-direction: column;
      color: ${themeColors.lightGrey};
      font-family: ${themeTypography.secondary};
      font-size: ${themeFontsSize.medium};
      margin-top: -4px;
    }

    &__data {
      display: flex;
      justify-content: space-around;
      gap: 20px;
      padding: 20px;
      background-color: ${themeColors.darkTransparent};
    }
  }
`;

export default EpisodeCardStyled;
