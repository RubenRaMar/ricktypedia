import { http, HttpResponse } from "msw";
import { apiPaths } from "../../constants/paths/paths";
import { newCharactersStateMock } from "../characters/characters";

export const handlers = [
  http.get(apiPaths.character, () => {
    return HttpResponse.json(newCharactersStateMock, { status: 200 });
  }),
];

export const errorHandlers = [
  http.get(apiPaths.character, () => {
    return HttpResponse.json(null, { status: 401 });
  }),
];
