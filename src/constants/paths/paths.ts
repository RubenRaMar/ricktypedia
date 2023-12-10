import {
  ApiPathsStructure,
  ItemsPathsStructure,
  PartialsPathsStructure,
} from "./types";

const apiUrl = import.meta.env.VITE_API_URL;

export const partialsPaths: PartialsPathsStructure = {
  base: "/",
  character: "/character",
  episode: "/episode",
  details: "/details",
  itemId: `/:id`,
};

export const apiPaths: ApiPathsStructure = {
  character: `${apiUrl}${partialsPaths.character}`,
  episode: `${apiUrl}${partialsPaths.episode}`,
};

export const itemsPaths: ItemsPathsStructure = {
  characterDetails: `${partialsPaths.character}${partialsPaths.details}`,
  characterDetailsId: `${partialsPaths.character}${partialsPaths.details}${partialsPaths.itemId}`,
  episodeDetails: `${partialsPaths.episode}${partialsPaths.details}`,
  episodeDetailsId: `${partialsPaths.episode}${partialsPaths.details}${partialsPaths.itemId}`,
};
