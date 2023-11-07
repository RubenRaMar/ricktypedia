import { Factory } from "fishery";
import { CharacterStructure } from "../../../data/characters/types";
import { faker } from "@faker-js/faker";

const characterFactory = Factory.define<CharacterStructure>(() => ({
  id: faker.number.int(),
  name: faker.person.firstName(),
  created: faker.person.prefix(),
  gender: faker.person.gender(),
  episode: [
    faker.internet.url({ appendSlash: true }),
    faker.internet.url({ appendSlash: true }),
    faker.internet.url({ appendSlash: true }),
    faker.internet.url({ appendSlash: true }),
    faker.internet.url({ appendSlash: true }),
  ],
  image: faker.image.url(),
  type: faker.string.alpha({ length: 10 }),
  species: faker.string.alpha({ length: 10 }),
  status: faker.string.alpha({ length: 10 }),
  location: {
    name: faker.location.city(),
    url: faker.string.alpha({ length: 10 }),
  },
  origin: {
    name: faker.location.city(),
    url: faker.string.alpha({ length: 10 }),
  },
  url: faker.string.alpha({ length: 10 }),
}));

export const characterMockFactory = (data?: CharacterStructure) =>
  characterFactory.build(data);

export const charactersMocksFactory = (
  totalMocks: number,
  data?: CharacterStructure
) => characterFactory.buildList(totalMocks, data);
