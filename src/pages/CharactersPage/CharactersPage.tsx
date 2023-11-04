import { useEffect, useMemo, useRef } from "react";
import CharactersPageStyled from "./CharactersPageStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import { showMoreCharactersActionCreator } from "../../store/characters/charactersSlice";
import useCharacter from "../../hooks/useCharacter/useCharacter";
import CharacterList from "../../components/CharacterList/CharacterList";
import FormSearch from "../../components/FormSearch/FormSearch";
import Button from "../../components/Button/Button";
import _debounce from "debounce";
import { apiPaths } from "../../constants/paths/paths";

const CharactersPage = (): React.ReactElement => {
  const isFirstRender = useRef(true);
  const charactersData = useAppSelector((store) => store);
  const {
    character: {
      info: { next },
      results,
    },
  } = charactersData;
  const dispatch = useAppDispatch();
  const nextPage = useAppSelector(
    ({
      character: {
        info: { next },
      },
    }) => next
  );

  const { getCharacterList, loadCharacters } = useCharacter();

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

  const handleSearchCharacters = useMemo(
    () =>
      _debounce(async (query: string) => {
        if (isFirstRender.current) {
          isFirstRender.current = false;
          return;
        }

        loadCharacters(`${apiPaths.character}/?name=${query}`);
      }, 500),
    [loadCharacters]
  );

  return (
    <CharactersPageStyled>
      <h1>Characters</h1>
      <FormSearch onSearchChange={handleSearchCharacters} />
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
          isDisabled={next === null}
        />
      )}
    </CharactersPageStyled>
  );
};

export default CharactersPage;
