import {
  NewEpisodesStateStructure,
  EpisodesStateStructure,
  EpisodesApiStructure,
  EpisodeDataApiStructure,
  EpisodeDataStateStructure,
} from "../../data/episodes/types";
import { InfoStructure } from "../../data/info/types";
import {
  episodeStateMockFactory,
  episodesApiMocksFactory,
  episodesStateMocksFactory,
} from "../factory/episodeFactories/episodeFactories";
import { infoMockFactory } from "../factory/infoFactories/infoFactories";
import { initialInfoDataMock } from "../infoMock/infoMock";

export const initialEpisodeStateMock: EpisodesStateStructure = {
  episodes: [],
  episodeData: {
    id: 0,
    name: "",
    airDate: "",
    episode: "",
    characters: [],
    url: "",
    created: "",
  },
  info: initialInfoDataMock,
};

const episodesMock: EpisodeDataStateStructure[] = episodesStateMocksFactory(3);
const resultsMock: EpisodeDataApiStructure[] = episodesApiMocksFactory(3);
const infoMock: InfoStructure = infoMockFactory();

export const currentEpisodeStateMock: EpisodesStateStructure = {
  episodes: episodesMock,
  episodeData: episodeStateMockFactory(),
  info: infoMock,
};

export const episodesApiMock: EpisodesApiStructure = {
  results: resultsMock,
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
