import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CharacterApiStateStructure } from "../../types";
import { initialCharactersState } from "../../data/characters/characters";
import { initialCharacterData } from "../../mocks/characters/characters";

const characterSlice = createSlice({
  name: "character",
  initialState: initialCharactersState,
  reducers: {
    loadCharacters: (
      _currentCharacterState,
      action: PayloadAction<CharacterApiStateStructure>
    ) => ({
      ...action.payload,
      characterData: initialCharacterData,
    }),
    showMoreCharacters: (
      currentCharacterState,
      action: PayloadAction<CharacterApiStateStructure>
    ) => ({
      ...currentCharacterState,
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
