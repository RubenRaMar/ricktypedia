import { useCallback } from "react";
import axios from "axios";
import { CharacterStateStructure } from "../../types";
import { apiPaths } from "../../constants/paths/paths";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";

const useCharacter = () => {
  const dispatch = useAppDispatch();

  const getCharacterList = useCallback(async (): Promise<
    CharacterStateStructure | undefined
  > => {
    try {
      dispatch(showLoadingActionCreator());

      const { data: characterStateStructure } = await axios.get<
        Promise<CharacterStateStructure>
      >(apiPaths.character);

      dispatch(hideLoadingActionCreator());

      return characterStateStructure;
    } catch (error) {
      dispatch(hideLoadingActionCreator());
    }
  }, [dispatch]);

  return { getCharacterList };
};

export default useCharacter;
