import styled from "styled-components";
import { themeColors } from "../../styles/themes/mainTheme";

const FormSearchStyled = styled.form`
  input {
    width: 300px;
    height: 40px;
    padding-inline-start: 10px;
    border-radius: 5px 0 0 5px;
    color: ${themeColors.light};
    background-color: ${themeColors.darkTransparent};
    border: 2px solid ${themeColors.tertiaryTransparent};

    &:focus-visible {
      outline: none;

      box-shadow: inset 0px 0px 3px 1px ${themeColors.tertiaryTransparent};
    }
  }

  @media (max-width: 650px) {
    input {
      max-width: 260px;
    }
  }

  @media (max-width: 390px) {
    width: 100%;

    input {
      max-width: 100%;
      width: 100%;
      border-radius: 5px;
    }

    button {
      display: none;
    }
  }
`;

export default FormSearchStyled;
