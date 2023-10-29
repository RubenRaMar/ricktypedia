import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CharacterStateStructure } from "../../types";

export const initialCharacters: CharacterStateStructure = {
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

const characterSlice = createSlice({
  name: "character",
  initialState: initialCharacters,
  reducers: {
    loadCharacters: (
      currentCharacterState,
      action: PayloadAction<CharacterStateStructure>
    ) => ({
      ...currentCharacterState,
      info: action.payload.info,
      results: action.payload.results,
    }),
  },
});

export const { loadCharacters: loadCharactersActionCreator } =
  characterSlice.actions;

export const characterReduder = characterSlice.reducer;
