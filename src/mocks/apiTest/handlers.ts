import { http, HttpResponse } from "msw";
import { apiPaths } from "../../constants/paths/paths";
import {
  characterMock,
  newCharactersStateMock,
} from "../characters/characters";
import { CharacterApiStateStructure, CharacterStructure } from "../../types";

export const handlers = [
  http.get(apiPaths.character, () => {
    return HttpResponse.json<CharacterApiStateStructure>(
      newCharactersStateMock,
      {
        status: 200,
      }
    );
  }),
  http.get(`${apiPaths.character}/:id`, () => {
    return HttpResponse.json<CharacterStructure>(characterMock, {
      status: 200,
    });
  }),
];

export const errorHandlers = [
  http.get(apiPaths.character, () => {
    return HttpResponse.json<CharacterApiStateStructure>(null, { status: 401 });
  }),
  http.get(`${apiPaths.character}/:id`, () => {
    return HttpResponse.json<CharacterStructure>(null, { status: 404 });
  }),
];
