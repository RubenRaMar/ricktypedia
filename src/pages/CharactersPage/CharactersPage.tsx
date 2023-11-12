import { useEffect, useState, useCallback } from "react";
import CharactersPageStyled from "./CharactersPageStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import { showMoreCharactersActionCreator } from "../../store/characters/charactersSlice";
import useCharacter from "../../hooks/useCharacter/useCharacter";
import CharacterList from "../../components/CharacterList/CharacterList";
import FormSearch from "../../components/FormSearch/FormSearch";
import Button from "../../components/Button/Button";
import { apiPaths } from "../../constants/paths/paths";
import useItems from "../../hooks/useItems/useItems";

const CharactersPage = (): React.ReactElement => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const { getCharacterList, loadCharacters } = useCharacter();
  const { handleItemsRealTimeSearch } = useItems();
  const {
    results,
    info: { next: nextPage },
  } = useAppSelector((state) => state.character);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      loadCharacters(apiPaths.character);
    })();
  }, [loadCharacters]);

  const handleClickToAction = async () => {
    if (nextPage) {
      const characters = await getCharacterList(nextPage);

      if (characters) {
        dispatch(showMoreCharactersActionCreator(characters));
      }
    }
  };

  const handleSearchCharacters = useCallback(
    (query: string) => {
      if (isFirstRender) {
        setIsFirstRender(false);
        return;
      }

      handleItemsRealTimeSearch({
        query: query,
        loadItems: loadCharacters,
        url: apiPaths.character,
      });
    },
    [handleItemsRealTimeSearch, isFirstRender, loadCharacters]
  );

  return (
    <CharactersPageStyled>
      <h1>Characters</h1>
      <FormSearch
        placeholder="Ricky, Morty, Summer..."
        onSearchChange={handleSearchCharacters}
      />
      {results.length <= 0 && (
        <span className="search-feedback">
          No characters matching your search were found
        </span>
      )}
      <CharacterList />
      {results.length > 0 && (
        <Button
          text="Show More"
          actionOnClick={handleClickToAction}
          isDisabled={nextPage === null}
        />
      )}
    </CharactersPageStyled>
  );
};

export default CharactersPage;
