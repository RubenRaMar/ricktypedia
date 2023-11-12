import styled from "styled-components";
import {
  themeColors,
  themeFontsSize,
  themeTypography,
} from "../../styles/themes/mainTheme";

const NavegationMenuStyled = styled.nav`
  font-family: ${themeTypography.secondary};
  font-size: ${themeFontsSize.medium};

  .navBar {
    &__links {
      display: flex;
      gap: 20px;
    }
  }

  .active {
    color: ${themeColors.tertiary};
    font-weight: 600;
  }

  @media (max-width: 550px) {
    width: 100%;

    .navBar {
      &__links {
        justify-content: space-evenly;
      }
    }
  }
`;

export default NavegationMenuStyled;
