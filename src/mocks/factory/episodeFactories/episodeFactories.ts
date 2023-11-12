import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import {
  EpisodeDataApiStructure,
  EpisodeDataStateStructure,
} from "../../../data/episodes/types";

const episodeStateFactory = Factory.define<EpisodeDataStateStructure>(() => ({
  id: faker.number.int(),
  name: faker.person.firstName(),
  episode: faker.string.alpha({ length: 10 }),
  characters: [
    faker.internet.url({ appendSlash: true }),
    faker.internet.url({ appendSlash: true }),
    faker.internet.url({ appendSlash: true }),
    faker.internet.url({ appendSlash: true }),
    faker.internet.url({ appendSlash: true }),
  ],
  airDate: faker.string.alpha({ length: 10 }),
  created: faker.string.alpha({ length: 10 }),
  url: faker.string.alpha({ length: 10 }),
}));

const episodeApiFactory = Factory.define<EpisodeDataApiStructure>(() => ({
  id: faker.number.int(),
  name: faker.person.firstName(),
  episode: faker.string.alpha({ length: 10 }),
  characters: [
    faker.internet.url({ appendSlash: true }),
    faker.internet.url({ appendSlash: true }),
    faker.internet.url({ appendSlash: true }),
    faker.internet.url({ appendSlash: true }),
    faker.internet.url({ appendSlash: true }),
  ],
  air_date: faker.string.alpha({ length: 10 }),
  created: faker.string.alpha({ length: 10 }),
  url: faker.string.alpha({ length: 10 }),
}));

export const episodeStateMockFactory = (data?: EpisodeDataStateStructure) =>
  episodeStateFactory.build(data);

export const episodesStateMocksFactory = (
  totalMocks: number,
  data?: EpisodeDataStateStructure
) => episodeStateFactory.buildList(totalMocks, data);

export const episodeApiMockFactory = (data?: EpisodeDataApiStructure) =>
  episodeApiFactory.build(data);

export const episodesApiMocksFactory = (
  totalMocks: number,
  data?: EpisodeDataApiStructure
) => episodeApiFactory.buildList(totalMocks, data);
