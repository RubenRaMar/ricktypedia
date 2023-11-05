import { apiPaths } from "../../constants/paths/paths";
import {
  CharacterApiStateStructure,
  CharacterStateStructure,
  CharacterStructure,
} from "../../types";
import {
  characterMockFactory,
  charactersMocksFactory,
  infoMockFactory,
} from "../factory/factories";

export const characterMock = characterMockFactory();

export const initialCharacterDataMock = {
  id: 0,
  name: "",
  status: "",
  species: "",
  type: "",
  gender: "",
  origin: {
    name: "",
    url: "",
  },
  location: {
    name: "",
    url: "",
  },
  image: "",
  episode: [],
  created: "",
  url: "",
};

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
        url: "",
      },
      location: {
        name: "",
        url: "",
      },
      image: "",
      episode: [],
      created: "",
      url: "",
    },
  ],
  info: {
    count: 0,
    pages: 0,
    next: "",
    prev: "",
  },
  characterData: initialCharacterDataMock,
};

export const currentCharactersStateMock: CharacterStateStructure = {
  results: charactersMocksFactory(4),
  info: infoMockFactory(),
  characterData: characterMock,
};

export const newCharactersStateMock: CharacterApiStateStructure = {
  results: charactersMocksFactory(4),
  info: {
    count: 0,
    pages: 0,
    next: apiPaths.character,
    prev: "",
  },
};

export const moreCharactersStateMock: CharacterApiStateStructure = {
  results: charactersMocksFactory(4),
  info: {
    count: 0,
    pages: 0,
    next: "",
    prev: "",
  },
};

export const arisaCyborgCharacterMock: CharacterStructure = {
  id: 16,
  name: "Amish Cyborg",
  status: "Dead",
  species: "Alien",
  type: "Parasite",
  gender: "Male",
  origin: {
    name: "unknown",
    url: "",
  },
  location: {
    name: "Earth (Replacement Dimension)",
    url: "https://rickandmortyapi.com/api/location/20",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    "https://rickandmortyapi.com/api/episode/3",
    "https://rickandmortyapi.com/api/episode/4",
    "https://rickandmortyapi.com/api/episode/5",
    "https://rickandmortyapi.com/api/episode/6",
    "https://rickandmortyapi.com/api/episode/7",
    "https://rickandmortyapi.com/api/episode/8",
    "https://rickandmortyapi.com/api/episode/9",
    "https://rickandmortyapi.com/api/episode/10",
  ],
  url: "https://rickandmortyapi.com/api/character/16",
  created: "2017-11-04T21:12:45.235Z",
};

export const emptyCharactersStateMock: CharacterApiStateStructure = {
  results: [],
  info: {
    count: 0,
    pages: 0,
    next: "/character",
    prev: "",
  },
};
