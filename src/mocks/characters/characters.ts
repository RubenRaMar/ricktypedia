import { CharacterStateStructure } from "../../types";
import { charactersMocksFactory, infoMockFactory } from "../factory/factories";

export const initialCharactersStateMock: CharacterStateStructure = {
  results: [
    {
      id: 0,
      name: "",
      status: "",
      species: "",
      type: "",
      gender: "",
      origin: {
        name: "",
      },
      location: {
        name: "",
      },
      image: "",
      episode: [],
      created: "",
    },
  ],
  info: {
    count: 0,
    pages: 0,
    next: "",
    prev: "",
  },
};

export const currentCharactersStateMock: CharacterStateStructure = {
  results: charactersMocksFactory(4),
  info: infoMockFactory(),
};

export const newCharactersStateMock: CharacterStateStructure = {
  results: charactersMocksFactory(4),
  info: infoMockFactory(),
};
