import {
  currentCharactersStateMock,
  initialCharacterDataMock,
  newCharactersStateMock,
} from "../../../mocks/characters/characters";
import {
  characterReduder,
  loadCharactersActionCreator,
} from "../charactersSlice";

describe("Given a loadCharacters mini reducer", () => {
  describe("When its invoked with a new list of 4 characters", () => {
    const expectedCharacterStateMock = newCharactersStateMock;

    test("Then it returns a new characters list with the new characters", () => {
      const loadCharacters = characterReduder(
        currentCharactersStateMock,
        loadCharactersActionCreator(newCharactersStateMock)
      );

      expect(loadCharacters).toStrictEqual({
        ...expectedCharacterStateMock,
        characterData: initialCharacterDataMock,
      });
    });

    test("And the info should be replaced by the new one", () => {
      const loadCharacters = characterReduder(
        currentCharactersStateMock,
        loadCharactersActionCreator(newCharactersStateMock)
      );

      expect(loadCharacters.info).toStrictEqual(newCharactersStateMock.info);
    });
  });
});
