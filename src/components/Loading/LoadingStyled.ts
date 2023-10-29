import styled, { keyframes } from "styled-components";
import pixelToRem from "../../styles/functions/pixelToRem";
import { themeColors } from "../../styles/themes/mainTheme";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${themeColors.tertiary};
  gap: 50px;
  z-index: 10;
  font-size: ${pixelToRem(30)};
  font-weight: 700;
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${themeColors.darkTransparent};
  position: fixed;

  .loading {
    &__image {
      animation: ${rotate} 2s linear infinite;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .loading {
      &__image {
        animation: none;
      }
    }
  }
`;

export default LoadingStyled;
