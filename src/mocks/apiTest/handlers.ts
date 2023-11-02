import { http, HttpResponse } from "msw";
import { apiPaths } from "../../constants/paths/paths";
import {
  emptyCharactersStateMock,
  newCharactersStateMock,
} from "../characters/characters";
import { CharacterStateStructure } from "../../types";

export const handlers = [
  http.get(apiPaths.character, () => {
    return HttpResponse.json<CharacterStateStructure>(newCharactersStateMock, {
      status: 200,
    });
  }),
];

export const errorHandlers = [
  http.get(apiPaths.character, () => {
    return HttpResponse.json<CharacterStateStructure>(
      emptyCharactersStateMock,
      { status: 401 }
    );
  }),
];
