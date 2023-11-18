import styled from "styled-components";
import { themeColors, themeTypography } from "../../styles/themes/mainTheme";

const NavegationMenuStyled = styled.nav`
  font-family: ${themeTypography.secondary};

  .navBar {
    &__links {
      display: flex;
      gap: 30px;
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
