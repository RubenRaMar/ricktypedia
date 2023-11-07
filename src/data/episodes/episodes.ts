import { EpisodesStateStructure } from "./types";
import { infoData } from "../info/info";

export const initialEpisodesState: EpisodesStateStructure = {
  episodes: [],
  episodeData: {
    id: 0,
    name: "",
    airDate: "",
    episode: "",
    characters: [],
    url: "",
    created: "",
  },
  info: infoData,
};
