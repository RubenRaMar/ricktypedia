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
import {
  EpisodeDataApiStructure,
  EpisodesApiStructure,
} from "../../data/episodes/types";
import {
  episodeDataApiMock,
  episodesApiMock,
} from "../episodesMocks/episodesMocks";

export const handlers = [
  http.get(apiPaths.character, () =>
    HttpResponse.json<CharacterApiStateStructure>(newCharactersStateMock)
  ),
  http.get(`${apiPaths.character}/:id`, () =>
    HttpResponse.json<CharacterStructure>(characterMock)
  ),
  http.get(`${apiPaths.episode}`, () =>
    HttpResponse.json<EpisodesApiStructure>(episodesApiMock)
  ),
  http.get(`${apiPaths.episode}/:id`, () =>
    HttpResponse.json<EpisodeDataApiStructure>(episodeDataApiMock)
  ),
];

export const errorHandlers = [
  http.get(apiPaths.character, () => HttpResponse.error()),
  http.get(`${apiPaths.character}/:id`, () => HttpResponse.error()),
  http.get(`${apiPaths.episode}`, () => HttpResponse.error()),
  http.get(`${apiPaths.episode}/:id`, () => HttpResponse.error()),
];
