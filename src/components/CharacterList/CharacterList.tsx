import { useAppSelector } from "../../store";
import CharacterCard from "../CharacterCard/CharacterCard";
import ItemListStyled from "../../styles/shared/ItemListStyled";

const CharacterList = (): React.ReactElement => {
  const characters = useAppSelector(({ character: { results } }) => results);

  return (
    <ItemListStyled>
      {characters.map((character, position) => (
        <li key={character.id}>
          <CharacterCard character={character} position={position} />
        </li>
      ))}
    </ItemListStyled>
  );
};

export default CharacterList;
