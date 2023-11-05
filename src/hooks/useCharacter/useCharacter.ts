import { useCallback } from "react";
import axios from "axios";
import { CharacterApiStateStructure } from "../../types";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";
import { loadCharactersActionCreator } from "../../store/characters/charactersSlice";
import { initialCharactersState } from "../../data/characters/characters";

const useCharacter = () => {
  const dispatch = useAppDispatch();

  const getCharacterList = useCallback(
    async (path: string): Promise<CharacterApiStateStructure | undefined> => {
      try {
        dispatch(showLoadingActionCreator());

        const { data: characterState } = await axios.get<
          Promise<CharacterApiStateStructure>
        >(path);

        dispatch(hideLoadingActionCreator());

        return characterState;
      } catch (error) {
        dispatch(hideLoadingActionCreator());
      }
    },
    [dispatch]
  );

  const loadCharacters = useCallback(
    async (path: string) => {
      const characters = await getCharacterList(path);

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

      if (path.includes("?name=") && !characters) {
        dispatch(loadCharactersActionCreator(initialCharactersState));
      }
    },
    [dispatch, getCharacterList]
  );

  return { getCharacterList, loadCharacters };
};

export default useCharacter;
