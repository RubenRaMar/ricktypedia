import { renderHook } from "@testing-library/react";
import { wrapWithProviders } from "../../testUtils/renderWithProviders";

import { newCharactersStateMock } from "../../mocks/characters/characters";
import { server } from "../../mocks/apiTest/server";
import useCharacter from "./useCharacter";

describe("Given a getCharacterList custom hook", () => {
  describe("When it invoked", () => {
    test("Then it should return a character list and its info", async () => {
      server.listen();

      const expectedNewCharacters = newCharactersStateMock;

      const {
        result: {
          current: { getCharacterList },
        },
      } = renderHook(() => useCharacter(), { wrapper: wrapWithProviders });

      const characters = await getCharacterList();

      expect(characters).toStrictEqual(expectedNewCharacters);
    });
  });
});
