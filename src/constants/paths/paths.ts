import {
  ApiPathsStructure,
  CharacterPathsStructure,
  PartialsPathsStructure,
} from "./types";

const apiUrl = import.meta.env.VITE_API_URL;

export const partialsPaths: PartialsPathsStructure = {
  base: "/",
  character: "/character",
  details: "/details",
  characterId: `/:id`,
};

export const apiPaths: ApiPathsStructure = {
  character: `${apiUrl}${partialsPaths.character}`,
};

export const characterPaths: CharacterPathsStructure = {
  characterDetails: `${partialsPaths.character}${partialsPaths.details}`,
  characterDetailsId: `${partialsPaths.character}${partialsPaths.details}${partialsPaths.characterId}`,
};
