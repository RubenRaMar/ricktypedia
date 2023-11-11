import { lazy } from "react";

export const LazyCharactersPage = lazy(
  () => import("../../pages/CharactersPage/CharactersPage")
);

export const LazyCharacterDetailsPage = lazy(
  () => import("../../pages/CharacterDetailsPage/CharacterDetailsPage")
);

export const LazyEpisodesPage = lazy(
  () => import("../../pages/EpisodesPage/EpisodesPage")
);
