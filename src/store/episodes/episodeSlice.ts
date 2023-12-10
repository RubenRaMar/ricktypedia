import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialEpisodesState } from "../../data/episodes/episodes";
import {
  EpisodeDataStructure,
  EpisodesStateStructure,
  NewEpisodesStateStructure,
} from "../../data/episodes/types";

const episodeSlice = createSlice({
  initialState: initialEpisodesState,
  name: "episode",
  reducers: {
    loadEpisodes: (
      currentEpisodeState,
      action: PayloadAction<NewEpisodesStateStructure>
    ): EpisodesStateStructure => ({
      ...currentEpisodeState,
      ...action.payload,
    }),
    clearEpisodes: (): EpisodesStateStructure => ({
      ...initialEpisodesState,
    }),
    showMoreEpisodes: (
      currentEpisodeState,
      action: PayloadAction<NewEpisodesStateStructure>
    ): EpisodesStateStructure => ({
      ...currentEpisodeState,
      episodes: [...currentEpisodeState.episodes, ...action.payload.episodes],
      info: action.payload.info,
    }),
    loadEpisodeById: (
      currentEpisodeState,
      action: PayloadAction<EpisodeDataStructure>
    ): EpisodesStateStructure => ({
      ...currentEpisodeState,
      episodeData: {
        ...currentEpisodeState.episodeData,
        ...action.payload,
      },
    }),
  },
});

export const {
  loadEpisodes: loadEpisodesActionCreator,
  showMoreEpisodes: showMoreEpisodesActionCreator,
  clearEpisodes: clearEpisodesActionCreator,
  loadEpisodeById: loadEpisodeByIdActionCreator,
} = episodeSlice.actions;

export const episodeReducer = episodeSlice.reducer;
