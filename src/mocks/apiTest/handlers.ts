import { http, HttpResponse } from "msw";
import { apiPaths } from "../../constants/paths/paths";
import {
  emptyCharactersStateMock,
  newCharactersStateMock,
} from "../characters/characters";
import { CharacterApiStateStructure } from "../../types";

export const handlers = [
  http.get(apiPaths.character, () => {
    return HttpResponse.json<CharacterApiStateStructure>(
      newCharactersStateMock,
      {
        status: 200,
      }
    );
  }),
];

export const errorHandlers = [
  http.get(apiPaths.character, () => {
    return HttpResponse.json<CharacterApiStateStructure>(
      emptyCharactersStateMock,
      { status: 401 }
    );
  }),
];
