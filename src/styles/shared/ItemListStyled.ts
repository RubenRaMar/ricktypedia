import styled from "styled-components";

const ItemListStyled = styled.ul`
  display: grid;
  gap: 50px;
  padding-block: 70px;

  @media (min-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1250px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1650px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default ItemListStyled;
