import { Factory } from "fishery";
import { CharacterStructure } from "../../types";
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
  location: { name: faker.address.city() },
  origin: { name: faker.address.city() },
}));

export const characterMockFactory = (data?: CharacterStructure) =>
  characterFactory.build(data);

export const charactersMocksFactory = (
  totalMocks: number,
  data?: CharacterStructure
) => characterFactory.buildList(totalMocks, data);
