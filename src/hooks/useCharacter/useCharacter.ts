import { useCallback } from "react";
import axios from "axios";
import { CharacterStateStructure } from "../../types";
import { apiPaths } from "../../constants/paths/paths";

const useCharacter = () => {
  const getCharacterList = useCallback(async (): Promise<
    CharacterStateStructure | undefined
  > => {
    const { data: characterStateStructure } = await axios.get<
      Promise<CharacterStateStructure>
    >(apiPaths.character);

    return characterStateStructure;
  }, []);

  return { getCharacterList };
};

export default useCharacter;
