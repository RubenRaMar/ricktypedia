import { Factory } from "fishery";
import { InfoStructure } from "../../../data/info/types";
import { faker } from "@faker-js/faker";
import { apiPaths } from "../../../constants/paths/paths";

const infoFactory = Factory.define<InfoStructure>(() => ({
  count: faker.number.int(),
  pages: faker.number.int(),
  next: apiPaths.episode,
  prev: faker.string.alpha({ length: 10 }),
}));

export const infoMockFactory = (data?: InfoStructure) =>
  infoFactory.build(data);
