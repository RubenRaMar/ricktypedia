import {
  characterMock,
  initialCharactersStateMock,
} from "../../../mocks/characters/characters";
import {
  characterReduder,
  loadCharacterByIdActionCreator,
} from "../charactersSlice";

describe("Given a loadCharacterById mini reducer", () => {
  describe("When its invoked", () => {
    test("Then it returns a new character", () => {
      const newCharacterMock = characterMock;

      const loadCharacterById = characterReduder(
        initialCharactersStateMock,
        loadCharacterByIdActionCreator(newCharacterMock)
      );

      expect(loadCharacterById.characterData).toStrictEqual(newCharacterMock);
    });
  });
});
