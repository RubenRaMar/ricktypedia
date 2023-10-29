import { CharacterStateStructure } from "../../types";

export const initialCharactersState: CharacterStateStructure = {
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
