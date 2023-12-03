import styled from "styled-components";
import FilterStyled from "../../styles/shared/FilterStyled";
import { themeColors } from "../../styles/themes/mainTheme";

const FilterSeasonsStyled = styled(FilterStyled)`
  select {
    border-radius: 5px;
  }

  option {
    background-color: ${themeColors.dark};
    color: ${themeColors.lightGrey};
    font-size: 0.95rem;
  }
`;

export default FilterSeasonsStyled;
