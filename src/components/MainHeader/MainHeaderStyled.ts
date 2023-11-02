import styled from "styled-components";
import { themeColors } from "../../styles/themes/mainTheme";

const MainHeaderStled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${themeColors.darkTransparent};
  border-bottom: 2px solid ${themeColors.tertiary};
  padding: 10px 30px;
  box-shadow: 0px 0px 6px 1px ${themeColors.tertiary};

  .main-header {
    &__image {
      @media (max-width: 400px) {
        width: 150px;
        height: 58px;
      }
    }
  }
`;

export default MainHeaderStled;
