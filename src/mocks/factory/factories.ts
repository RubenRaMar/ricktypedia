import { Factory } from "fishery";
import { CharacterStructure, InfoStructure } from "../../types";
import { faker } from "@faker-js/faker";

const characterFactory = Factory.define<CharacterStructure>(() => ({
  id: faker.number.int(),
  name: faker.person.firstName(),
  created: faker.person.gender(),
  gender: faker.person.prefix(),
  episode: [faker.string.alpha()],
  image: faker.image.url(),
  type: faker.string.alpha(),
  species: faker.string.alpha(),
  status: faker.string.alpha(),
  location: { name: faker.location.city(), url: faker.string.alpha() },
  origin: { name: faker.location.city(), url: faker.string.alpha() },
  url: faker.string.alpha(),
}));

const infoFactory = Factory.define<InfoStructure>(() => ({
  count: faker.number.int(),
  next: faker.string.alpha(),
  prev: faker.string.alpha(),
  pages: faker.number.int(),
}));

export const characterMockFactory = (data?: CharacterStructure) =>
  characterFactory.build(data);

export const infoMockFactory = (data?: InfoStructure) =>
  infoFactory.build(data);

export const charactersMocksFactory = (
  totalMocks: number,
  data?: CharacterStructure
) => characterFactory.buildList(totalMocks, data);
