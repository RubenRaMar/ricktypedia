import styled from "styled-components";

const ItemListStyled = styled.ul`
  display: grid;
  gap: 20px;
  padding-block: 70px;

  @media (min-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 950px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1450px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export default ItemListStyled;
