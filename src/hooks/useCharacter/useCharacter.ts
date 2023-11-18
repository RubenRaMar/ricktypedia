import { useCallback } from "react";
import axios from "axios";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";
import { loadCharactersActionCreator } from "../../store/characters/charactersSlice";
import { initialCharactersState } from "../../data/characters/characters";
import {
  CharacterApiStateStructure,
  CharacterStructure,
} from "../../data/characters/types";

const useCharacter = () => {
  const dispatch = useAppDispatch();

  const getCharacterList = useCallback(
    async (url: string): Promise<CharacterApiStateStructure | undefined> => {
      try {
        dispatch(showLoadingActionCreator());

        const { data: characterState } = await axios.get<
          Promise<CharacterApiStateStructure>
        >(url);

        dispatch(hideLoadingActionCreator());

        return characterState;
      } catch (error) {
        dispatch(hideLoadingActionCreator());
      }
    },
    [dispatch]
  );

  const loadCharacters = useCallback(
    async (url: string) => {
      const characters = await getCharacterList(url);

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

      if (url.includes("?name=") && !characters) {
        dispatch(loadCharactersActionCreator(initialCharactersState));
      }
    },
    [dispatch, getCharacterList]
  );

  const getCharacterById = useCallback(
    async (url: string): Promise<CharacterStructure | undefined> => {
      try {
        dispatch(showLoadingActionCreator());

        const { data: character } = await axios.get<CharacterStructure>(url);

        dispatch(hideLoadingActionCreator());

        return character;
      } catch (error) {
        dispatch(hideLoadingActionCreator());
      }
    },
    [dispatch]
  );

  return {
    getCharacterList,
    loadCharacters,
    getCharacterById,
  };
};

export default useCharacter;
