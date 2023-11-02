import styled from "styled-components";

const CharacterListStyled = styled.ul`
  display: grid;
  gap: 50px;
  padding-block: 70px;

  @media (min-width: 650px) {
    max-width: 1200px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1000px) {
    max-width: 1300px;

    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1305px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default CharacterListStyled;
