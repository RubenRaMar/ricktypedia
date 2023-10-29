import {
  currentCharactersStateMock,
  newCharactersStateMock,
} from "../../../mocks/characters/characters";
import { CharacterStateStructure } from "../../../types";
import {
  characterReduder,
  loadCharactersActionCreator,
} from "../charactersSlice";

describe("Given a loadCharacters mini reducer", () => {
  describe("When its invoked with a new list of 4 characters and it already contains another 4", () => {
    const expectedCharacterStateMock: CharacterStateStructure = {
      results: [
        ...currentCharactersStateMock.results,
        ...newCharactersStateMock.results,
      ],
      info: newCharactersStateMock.info,
    };

    const loadCharacters = characterReduder(
      currentCharactersStateMock,
      loadCharactersActionCreator(newCharactersStateMock)
    );

    test("Then it returns a new characters list with the old characters plus the new characters", () => {
      expect(loadCharacters).toStrictEqual(expectedCharacterStateMock);
    });

    test("And with a total of 8 characters", () => {
      const expetedCharactersLength = 8;

      expect(loadCharacters.results.length).toStrictEqual(
        expetedCharactersLength
      );
    });

    test("And the info should be replaced by the new one", () => {
      expect(loadCharacters.info).toStrictEqual(newCharactersStateMock.info);
    });
  });
});
