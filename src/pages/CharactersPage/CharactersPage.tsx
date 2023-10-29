import { useEffect } from "react";
import CharactersPageStyled from "./CharactersPageStyled";
import { useAppDispatch } from "../../store";
import { loadCharactersActionCreator } from "../../store/characters/charactersSlice";
import useCharacter from "../../hooks/useCharacter/useCharacter";

const CharactersPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
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

  return (
    <CharactersPageStyled>
      <h1>Characters</h1>
    </CharactersPageStyled>
  );
};

export default CharactersPage;
