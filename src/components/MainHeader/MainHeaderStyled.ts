import styled from "styled-components";
import { themeColors } from "../../styles/themes/mainTheme";

const MainHeaderStled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${themeColors.secondaryBackground};
  border-bottom: 2px solid ${themeColors.tertiary};
  padding: 22px 30px;
`;

export default MainHeaderStled;
