import { Factory } from "fishery";
import { EpisodesStructure } from "../../../data/episodes/types";
import { faker } from "@faker-js/faker";

const episodeFactory = Factory.define<EpisodesStructure>(() => ({
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

export const episodeMockFactory = (data?: EpisodesStructure) =>
  episodeFactory.build(data);

export const episodeMocksFactory = (
  totalMocks: number,
  data?: EpisodesStructure
) => episodeFactory.buildList(totalMocks, data);
