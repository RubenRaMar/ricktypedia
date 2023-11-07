import { Factory } from "fishery";
import { InfoStructure } from "../../../data/info/types";
import { faker } from "@faker-js/faker";

const infoFactory = Factory.define<InfoStructure>(() => ({
  count: faker.number.int(),
  pages: faker.number.int(),
  next: faker.string.alpha({ length: 10 }),
  prev: faker.string.alpha({ length: 10 }),
}));

export const infoMockFactory = (data?: InfoStructure) =>
  infoFactory.build(data);
