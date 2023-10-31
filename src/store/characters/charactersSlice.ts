import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CharacterStateStructure } from "../../types";
import { initialCharactersState } from "../../data/characters/characters";

const characterSlice = createSlice({
  name: "character",
  initialState: initialCharactersState,
  reducers: {
    loadCharacters: (
      _currentCharacterState,
      action: PayloadAction<CharacterStateStructure>
    ) => action.payload,
    showMoreCharacters: (
      currentCharacterState,
      action: PayloadAction<CharacterStateStructure>
    ) => ({
      results: [...currentCharacterState.results, ...action.payload.results],
      info: action.payload.info,
    }),
  },
});

export const {
  loadCharacters: loadCharactersActionCreator,
  showMoreCharacters: showMoreCharactersActionCreator,
} = characterSlice.actions;

export const characterReduder = characterSlice.reducer;
