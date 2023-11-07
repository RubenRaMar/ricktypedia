import { infoData } from "../info/info";
import { CharacterStateStructure } from "./types";

export const initialCharactersState: CharacterStateStructure = {
  results: [],
  info: infoData,
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
