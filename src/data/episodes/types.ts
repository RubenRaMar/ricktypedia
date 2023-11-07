import { InfoStructure } from "../info/types";

export interface EpisodeDataApiStructure {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface EpisodesApiStructure {
  results: EpisodeDataApiStructure[];
  info: InfoStructure;
}

export interface EpisodeDataStateStructure {
  id: number;
  name: string;
  airDate: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface NewEpisodesStateStructure {
  episodes: EpisodeDataStateStructure[];
  info: InfoStructure;
}

export interface EpisodesStateStructure extends NewEpisodesStateStructure {
  episodeData: EpisodeDataStateStructure;
}
