import styled from "styled-components";
import pixelToRem from "../../styles/functions/pixelToRem";
import { themeColors } from "../../styles/themes/mainTheme";

const ButtonStyled = styled.button`
  padding: 17px 30px;
  font-weight: 700;
  color: ${themeColors.secondary};
  background-color: ${themeColors.darkTransparent};
  border: 2px solid ${themeColors.secondaryTransparent};
  border-radius: 10px;
  font-size: ${pixelToRem(18)};
  text-transform: uppercase;
  box-shadow: 0px 0px 6px 2px ${themeColors.secondaryTransparent};
`;

export default ButtonStyled;
