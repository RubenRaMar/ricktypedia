import { lazy } from "react";

export const LazyCharactersPage = lazy(
  () => import("../../pages/CharactersPage/CharactersPage")
);

export const CharacterDetailsPage = lazy(
  () => import("../../pages/CharacterDetailsPage/CharacterDetailsPage")
);
