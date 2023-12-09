import { renderHook } from "@testing-library/react";
import { server } from "../../mocks/apiTest/node";
import { wrapWithProviders } from "../../testUtils/renderWithProviders";
import {
  characterMock,
  emptyCharactersStateMock,
  initialCharacterDataMock,
  newCharactersStateMock,
} from "../../mocks/charactersMocks/charactersMocks";
import useCharacter from "./useCharacter";
import { errorHandlers, handlers } from "../../mocks/apiTest/handlers";
import { store } from "../../store";
import { apiPaths, itemsPaths } from "../../constants/paths/paths";

describe("Given a getCharacterList custom hook", () => {
  describe(`When it invoked with the path "${apiPaths.character}"`, () => {
    test("Then it should return a character list and their info", async () => {
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
    test("Then it should retuun undefined", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getCharacterList },
        },
      } = renderHook(() => useCharacter(), { wrapper: wrapWithProviders });

      const characters = await getCharacterList(apiPaths.character);

      expect(characters).toBeUndefined();
    });
  });
});

describe("Given a loadCharacters hook", () => {
  describe(`When it invoked with the path "${apiPaths.character}/?name="`, () => {
    test("Then it should return a character list and its info", async () => {
      server.resetHandlers(...handlers);

      const {
        result: {
          current: { loadCharacters },
        },
      } = renderHook(() => useCharacter(), { wrapper: wrapWithProviders });

      await loadCharacters(`${apiPaths.character}/?name=`);

      const character = store.getState().character;

      expect(character).toStrictEqual({
        ...newCharactersStateMock,
        characterData: initialCharacterDataMock,
      });
    });
  });

  describe(`When it invoked with the path "${apiPaths.character}/?name="  but there is an error`, () => {
    test("Then it should return a empty character list", async () => {
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

describe("Given a getCharacterById custom hook", () => {
  const characterId = 13753;

  describe(`When it invoked with the url "${itemsPaths.characterDetails}/${characterId}"`, () => {
    test("Then it should return a character", async () => {
      server.resetHandlers(...handlers);

      const expectedNewCharacters = characterMock;

      const {
        result: {
          current: { getCharacterById },
        },
      } = renderHook(() => useCharacter(), { wrapper: wrapWithProviders });

      const character = await getCharacterById(
        `${apiPaths.character}/${characterId}`
      );

      expect(character).toStrictEqual(expectedNewCharacters);
    });
  });

  describe(`When it invoked with the path "${itemsPaths.characterDetails}/${characterId}"  but there is an error`, () => {
    test("Then it should return undefined", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getCharacterById },
        },
      } = renderHook(() => useCharacter(), { wrapper: wrapWithProviders });

      const character = await getCharacterById(
        `${apiPaths.character}/${characterId}`
      );

      expect(character).toBeUndefined();
    });
  });
});
