import { apiPaths } from "../../constants/paths/paths";
import {
  CharacterApiStateStructure,
  CharacterStateStructure,
  CharacterStructure,
} from "../../data/characters/types";
import { infoData } from "../../data/info/info";
import {
  characterMockFactory,
  charactersMocksFactory,
} from "../factory/characterFactories/characterFactories";
import { infoMockFactory } from "../factory/infoFactories/infoFactories";

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

export const characterMock = characterMockFactory();

export const initialCharactersStateMock: CharacterStateStructure = {
  info: infoData,
  results: [initialCharacterDataMock],
  characterData: initialCharacterDataMock,
};

export const currentCharactersStateMock: CharacterStateStructure = {
  info: infoMockFactory(),
  results: charactersMocksFactory(4),
  characterData: characterMock,
};

export const moreCharactersStateMock: CharacterApiStateStructure = {
  info: infoData,
  results: charactersMocksFactory(4),
};

export const emptyCharactersStateMock: CharacterApiStateStructure = {
  info: {
    count: 0,
    pages: 0,
    next: "/character",
    prev: "",
  },
  results: [],
};

export const newCharactersStateMock: CharacterApiStateStructure = {
  info: {
    count: 0,
    pages: 0,
    next: apiPaths.character,
    prev: "",
  },
  results: charactersMocksFactory(4),
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
