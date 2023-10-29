import { CharacterStateStructure } from "../../../types";
import {
  charactersMocksFactory,
  infoMockFactory,
} from "../../../mocks/factory/factories";
import {
  characterReduder,
  initialCharacters,
  loadCharactersActionCreator,
} from "../charactersSlice";

describe("Given a loadCharacters mini reducer", () => {
  describe("When it is invoked with a characters list", () => {
    test("Then it returns a new characters list with the old characters plus the new characters", () => {
      const charactersMock = charactersMocksFactory(4);
      const infoMock = infoMockFactory();
      const expectedCharacter: CharacterStateStructure = {
        results: charactersMock,
        info: infoMock,
      };

      const loadCharacters = characterReduder(
        initialCharacters,
        loadCharactersActionCreator(expectedCharacter)
      );

      expect(loadCharacters).toStrictEqual(expectedCharacter);
    });
  });
});
