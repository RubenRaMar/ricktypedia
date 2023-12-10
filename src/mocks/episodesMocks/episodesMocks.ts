import {
  NewEpisodesStateStructure,
  EpisodesStateStructure,
  EpisodesApiStructure,
  EpisodeDataApiStructure,
  EpisodeDataStructure,
} from "../../data/episodes/types";
import { InfoStructure } from "../../data/info/types";
import {
  episodeDataApiMockFactory,
  episodeStateMockFactory,
  episodesApiMocksFactory,
  episodesStateMocksFactory,
} from "../factory/episodeFactories/episodeFactories";
import { infoMockFactory } from "../factory/infoFactories/infoFactories";
import { initialInfoDataMock } from "../infoMock/infoMock";

export const episodesMock: EpisodeDataStructure[] =
  episodesStateMocksFactory(3);
export const resultsEpisodesMock: EpisodeDataApiStructure[] =
  episodesApiMocksFactory(3);
export const episodeDataApiMock: EpisodeDataApiStructure =
  episodeDataApiMockFactory();
export const episodeDataMock: EpisodeDataStructure = episodeStateMockFactory();
export const infoMock: InfoStructure = infoMockFactory();

export const initialEpisodeDataMock = {
  id: 0,
  name: "",
  airDate: "",
  episode: "",
  characters: [],
  url: "",
  created: "",
};

export const initialEpisodeStateMock: EpisodesStateStructure = {
  episodes: [],
  episodeData: initialEpisodeDataMock,
  info: initialInfoDataMock,
};

export const currentEpisodeStateMock: EpisodesStateStructure = {
  episodes: episodesMock,
  episodeData: episodeDataMock,
  info: infoMock,
};

export const episodesApiMock: EpisodesApiStructure = {
  results: resultsEpisodesMock,
  info: infoMock,
};

export const newEpisodesStateMock: NewEpisodesStateStructure = {
  episodes: episodesApiMock.results.map((episodeApiMock) => ({
    id: episodeApiMock.id,
    name: episodeApiMock.name,
    episode: episodeApiMock.episode.toLowerCase(),
    airDate: episodeApiMock.air_date,
    characters: episodeApiMock.characters,
    url: episodeApiMock.url,
    created: episodeApiMock.created,
  })),
  info: episodesApiMock.info,
};

export const newEpisodeDataMock = {
  id: episodeDataApiMock.id,
  name: episodeDataApiMock.name,
  episode: episodeDataApiMock.episode.toLowerCase(),
  airDate: episodeDataApiMock.air_date,
  characters: episodeDataApiMock.characters,
  url: episodeDataApiMock.url,
  created: episodeDataApiMock.created,
};
