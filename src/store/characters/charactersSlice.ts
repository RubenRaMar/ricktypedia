import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialCharactersState } from "../../data/characters/characters";
import { initialCharacterDataMock } from "../../mocks/charactersMocks/charactersMocks";
import {
  CharacterApiStateStructure,
  CharacterStateStructure,
  CharacterStructure,
} from "../../data/characters/types";

const characterSlice = createSlice({
  name: "character",
  initialState: initialCharactersState,
  reducers: {
    loadCharacters: (
      _currentCharacterState,
      action: PayloadAction<CharacterApiStateStructure>
    ): CharacterStateStructure => ({
      ...action.payload,
      characterData: initialCharacterDataMock,
    }),
    showMoreCharacters: (
      currentCharacterState,
      action: PayloadAction<CharacterApiStateStructure>
    ): CharacterStateStructure => ({
      ...currentCharacterState,
      results: [...currentCharacterState.results, ...action.payload.results],
      info: action.payload.info,
    }),
    loadCharacterById: (
      currentCharacterState,
      action: PayloadAction<CharacterStructure>
    ): CharacterStateStructure => ({
      ...currentCharacterState,
      characterData: action.payload,
    }),
  },
});

export const {
  loadCharacters: loadCharactersActionCreator,
  showMoreCharacters: showMoreCharactersActionCreator,
  loadCharacterById: loadCharacterByIdActionCreator,
} = characterSlice.actions;

export const characterReduder = characterSlice.reducer;
