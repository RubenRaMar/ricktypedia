import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialEpisodesState } from "../../data/episodes/episodes";
import { NewEpisodesStateStructure } from "../../data/episodes/types";

const episodeSlice = createSlice({
  initialState: initialEpisodesState,
  name: "episode",
  reducers: {
    loadEpisodes: (
      currentState,
      action: PayloadAction<NewEpisodesStateStructure>
    ) => ({
      ...currentState,
      ...action.payload,
    }),
  },
});

export const { loadEpisodes: loadEpisodesActionCreator } = episodeSlice.actions;

export const episodeReducer = episodeSlice.reducer;
