import { renderHook } from "@testing-library/react";
import { wrapWithProviders } from "../../testUtils/renderWithProviders";

import { newCharactersStateMock } from "../../mocks/characters/characters";
import { server } from "../../mocks/apiTest/server";
import useCharacter from "./useCharacter";
import { errorHandlers } from "../../mocks/apiTest/handlers";
import { store } from "../../store";

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

  describe("When it invoked but there is an error", () => {
    test("Then it should cancel the loading'", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getCharacterList },
        },
      } = renderHook(() => useCharacter(), { wrapper: wrapWithProviders });

      await getCharacterList();

      const isLoading = store.getState().ui.isLoading;

      expect(isLoading).toBeFalsy();
    });
  });
});
