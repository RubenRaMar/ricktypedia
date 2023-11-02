import { useEffect } from "react";
import CharactersPageStyled from "./CharactersPageStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  loadCharactersActionCreator,
  showMoreCharactersActionCreator,
} from "../../store/characters/charactersSlice";
import useCharacter from "../../hooks/useCharacter/useCharacter";
import CharacterList from "../../components/CharacterList/CharacterList";
import FormSearch from "../../components/FormSearch/FormSearch";
import Button from "../../components/Button/Button";

const CharactersPage = (): React.ReactElement => {
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

  const { getCharacterList } = useCharacter();

  useEffect(() => {
    (async () => {
      const characters = await getCharacterList();

      if (characters) {
        dispatch(loadCharactersActionCreator(characters));

        const preloadLink = document.createElement("link");
        preloadLink.rel = "preload";
        preloadLink.as = "image";
        preloadLink.href = characters.results[0].image;

        const head = document.head;
        const firstChild = head.firstChild;
        head.insertBefore(preloadLink, firstChild);
      }
    })();
  }, [dispatch, getCharacterList]);

  const handleClickToAction = async () => {
    if (nextPage) {
      const characters = await getCharacterList(nextPage);

      if (characters) {
        dispatch(showMoreCharactersActionCreator(characters));
      }
    }
  };

  return (
    <CharactersPageStyled>
      <h1>Characters</h1>
      <FormSearch />
      {results.length <= 0 && (
        <span className="search-feedback">
          No characters matching your search were found
        </span>
      )}
      <CharacterList />
      {results.length > 0 && (
        <Button
          content="Show More"
          actionOnClick={handleClickToAction}
          isDisabled={next === null}
        />
      )}
    </CharactersPageStyled>
  );
};

export default CharactersPage;
