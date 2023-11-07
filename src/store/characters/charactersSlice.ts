import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialCharactersState } from "../../data/characters/characters";
import { initialCharacterDataMock } from "../../mocks/charactersMocks/charactersMocks";
import {
  CharacterApiStateStructure,
  CharacterStructure,
} from "../../data/characters/types";

const characterSlice = createSlice({
  name: "character",
  initialState: initialCharactersState,
  reducers: {
    loadCharacters: (
      _currentCharacterState,
      action: PayloadAction<CharacterApiStateStructure>
    ) => ({
      ...action.payload,
      characterData: initialCharacterDataMock,
    }),
    showMoreCharacters: (
      currentCharacterState,
      action: PayloadAction<CharacterApiStateStructure>
    ) => ({
      ...currentCharacterState,
      results: [...currentCharacterState.results, ...action.payload.results],
      info: action.payload.info,
    }),
    loadCharacterById: (
      currentCharacterState,
      action: PayloadAction<CharacterStructure>
    ) => ({
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
