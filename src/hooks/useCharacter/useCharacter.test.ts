import { renderHook } from "@testing-library/react";
import { wrapWithProviders } from "../../testUtils/renderWithProviders";

import {
  emptyCharactersStateMock,
  initialCharacterData,
  newCharactersStateMock,
} from "../../mocks/characters/characters";
import { server } from "../../mocks/apiTest/node";
import useCharacter from "./useCharacter";
import { errorHandlers } from "../../mocks/apiTest/handlers";
import { store } from "../../store";
import { apiPaths } from "../../constants/paths/paths";

describe("Given a getCharacterList custom hook", () => {
  describe(`When it invoked with the path "${apiPaths.character}"`, () => {
    test("Then it should return a character list and its info", async () => {
      const expectedNewCharacters = newCharactersStateMock;

      const {
        result: {
          current: { getCharacterList },
        },
      } = renderHook(() => useCharacter(), { wrapper: wrapWithProviders });

      const characters = await getCharacterList(apiPaths.character);

      expect(characters).toStrictEqual(expectedNewCharacters);
    });
  });

  describe(`When it invoked with the path "${apiPaths.character}" but there is an error`, () => {
    test("Then it should cancel the loading'", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getCharacterList },
        },
      } = renderHook(() => useCharacter(), { wrapper: wrapWithProviders });

      await getCharacterList(apiPaths.character);

      const isLoading = store.getState().ui.isLoading;

      expect(isLoading).toBeFalsy();
    });
  });
});

describe("Given a loadCharacters hook", () => {
  describe(`When it invoked with the path "${apiPaths.character}/?name="`, () => {
    test("Then it should return a character list and its info", async () => {
      const {
        result: {
          current: { loadCharacters },
        },
      } = renderHook(() => useCharacter(), { wrapper: wrapWithProviders });

      await loadCharacters(`${apiPaths.character}/?name=`);

      const character = store.getState().character;

      expect(character).toStrictEqual({
        ...newCharactersStateMock,
        characterData: initialCharacterData,
      });
    });
  });

  describe(`When it invoked with the path "${apiPaths.character}/?name="  but there is an error`, () => {
    test("", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { loadCharacters },
        },
      } = renderHook(() => useCharacter(), { wrapper: wrapWithProviders });

      await loadCharacters(`${apiPaths.character}/?name=`);

      const characterLength = store.getState().character.results.length;

      expect(characterLength).toStrictEqual(
        emptyCharactersStateMock.results.length
      );
    });
  });
});
