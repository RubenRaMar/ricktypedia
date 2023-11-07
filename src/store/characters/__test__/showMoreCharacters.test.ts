import { CharacterStateStructure } from "../../../data/characters/types";
import {
  currentCharactersStateMock,
  moreCharactersStateMock,
} from "../../../mocks/charactersMocks/charactersMocks";
import {
  characterReduder,
  showMoreCharactersActionCreator,
} from "../charactersSlice";

describe("Given a showMoreCharacters mini reducer", () => {
  describe("When its invoked with a new list of 4 characters and it already contains another 4", () => {
    const expectedCharacterStateMock: CharacterStateStructure = {
      ...currentCharactersStateMock,
      results: [
        ...currentCharactersStateMock.results,
        ...moreCharactersStateMock.results,
      ],
      info: moreCharactersStateMock.info,
    };

    const showMoreCharacters = characterReduder(
      currentCharactersStateMock,
      showMoreCharactersActionCreator(moreCharactersStateMock)
    );

    test("Then it returns a new characters list with the old characters plus the new characters", () => {
      expect(showMoreCharacters).toStrictEqual(expectedCharacterStateMock);
    });

    test("And with a total of 8 characters", () => {
      const expetedCharactersLength = 8;

      expect(showMoreCharacters.results.length).toStrictEqual(
        expetedCharactersLength
      );
    });

    test("And the info should be replaced by the new one", () => {
      expect(showMoreCharacters.info).toStrictEqual(
        moreCharactersStateMock.info
      );
    });
  });
});
