import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import { EpisodeDataStateStructure } from "../../../data/episodes/types";

const episodeFactory = Factory.define<EpisodeDataStateStructure>(() => ({
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

export const episodeMockFactory = (data?: EpisodeDataStateStructure) =>
  episodeFactory.build(data);

export const episodeMocksFactory = (
  totalMocks: number,
  data?: EpisodeDataStateStructure
) => episodeFactory.buildList(totalMocks, data);
