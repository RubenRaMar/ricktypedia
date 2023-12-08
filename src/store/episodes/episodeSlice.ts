import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialEpisodesState } from "../../data/episodes/episodes";
import { NewEpisodesStateStructure } from "../../data/episodes/types";

const episodeSlice = createSlice({
  initialState: initialEpisodesState,
  name: "episode",
  reducers: {
    loadEpisodes: (
      currentEpisodeState,
      action: PayloadAction<NewEpisodesStateStructure>
    ) => ({
      ...currentEpisodeState,
      ...action.payload,
    }),
    clearEpisodes: () => ({
      ...initialEpisodesState,
    }),
    showMoreEpisodes: (
      currentEpisodeState,
      action: PayloadAction<NewEpisodesStateStructure>
    ) => ({
      ...currentEpisodeState,
      episodes: [...currentEpisodeState.episodes, ...action.payload.episodes],
      info: action.payload.info,
    }),
  },
});

export const {
  loadEpisodes: loadEpisodesActionCreator,
  showMoreEpisodes: showMoreEpisodesActionCreator,
  clearEpisodes: clearEpisodesActionCreator,
} = episodeSlice.actions;

export const episodeReducer = episodeSlice.reducer;
