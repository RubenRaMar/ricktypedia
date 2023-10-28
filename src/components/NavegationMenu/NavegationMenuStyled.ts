import styled from "styled-components";
import {
  themeColors,
  themeFontsSize,
  themeTypography,
} from "../../styles/themes/mainTheme";

const NavegationMenuStyled = styled.nav`
  font-family: ${themeTypography.secondary};
  font-size: ${themeFontsSize.medium};

  .active {
    color: ${themeColors.tertiary};
    font-weight: 600;
  }
`;

export default NavegationMenuStyled;
