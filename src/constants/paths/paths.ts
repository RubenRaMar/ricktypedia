import { ApiPathsStructure, PartialsPathsStructure } from "./types";

const apiUrl = import.meta.env.VITE_API_URL;

export const partialsPaths: PartialsPathsStructure = {
  base: "/",
  character: "/character",
  details: "/details",
  characterId: "/:id",
};

export const apiPaths: ApiPathsStructure = {
  character: `${apiUrl}${partialsPaths.character}`,
};
