import { CharacterStateStructure } from "../../types";

export const initialCharactersState: CharacterStateStructure = {
  results: [],
  info: {
    count: 0,
    pages: 0,
    next: "",
    prev: "",
  },
  characterData: {
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
};
