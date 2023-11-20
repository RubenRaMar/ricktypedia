import { useEffect, useCallback } from "react";
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
  const dispatch = useAppDispatch();
  const { handleItemsRealTimeSearch } = useItems();
  const { getCharacterList, loadCharacters } = useCharacter();
  const {
    character: {
      info: { next: nextPage },
      results: characters,
    },
    ui: { isLoading },
  } = useAppSelector((state) => state);

  useEffect(() => {
    (async () => {
      loadCharacters(apiPaths.character);
    })();
  }, [loadCharacters]);

  const handleShowMoreCharacters = async () => {
    if (nextPage) {
      const characters = await getCharacterList(nextPage);

      if (characters) {
        dispatch(showMoreCharactersActionCreator(characters));
      }
    }
  };

  const handleSearchCharacters = useCallback(
    (query: string) => {
      handleItemsRealTimeSearch({
        query: query,
        loadItems: loadCharacters,
        url: apiPaths.character,
      });
    },
    [handleItemsRealTimeSearch, loadCharacters]
  );

  return (
    <CharactersPageStyled>
      <h1>Characters</h1>
      <FormSearch
        placeholder="Ricky, Morty, Summer..."
        onSearchChange={handleSearchCharacters}
      />
      {characters.length <= 0 && !isLoading && (
        <span className="search-feedback">
          No characters matching your search were found
        </span>
      )}
      <CharacterList />
      {characters.length > 0 && (
        <Button
          text="Show More"
          actionOnClick={handleShowMoreCharacters}
          isDisabled={nextPage === null}
        />
      )}
    </CharactersPageStyled>
  );
};

export default CharactersPage;
