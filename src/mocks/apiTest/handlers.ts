import { http, HttpResponse } from "msw";
import { apiPaths } from "../../constants/paths/paths";
import {
  characterMock,
  newCharactersStateMock,
} from "../charactersMocks/charactersMocks";
import {
  CharacterApiStateStructure,
  CharacterStructure,
} from "../../data/characters/types";
import { EpisodesApiStructure } from "../../data/episodes/types";
import { episodesApiMock } from "../episodesMocks/episodesMocks";

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
  http.get(`${apiPaths.episode}`, () => {
    return HttpResponse.json<EpisodesApiStructure>(episodesApiMock, {
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
  http.get(`${apiPaths.episode}`, () => {
    return HttpResponse.json<EpisodesApiStructure>(null, { status: 404 });
  }),
];
