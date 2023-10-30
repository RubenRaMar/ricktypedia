import { useAppSelector } from "../../store";
import CharacterCard from "../CharacterCard/CharacterCard";
import CharacterListStyled from "./CharacterListStyled";

const CharacterList = (): React.ReactElement => {
  const characters = useAppSelector(({ character: { results } }) => results);

  return (
    <CharacterListStyled>
      {characters.map((character, position) => (
        <li key={character.id}>
          <CharacterCard character={character} position={position} />
        </li>
      ))}
    </CharacterListStyled>
  );
};

export default CharacterList;
