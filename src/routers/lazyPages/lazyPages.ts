import { lazy } from "react";

export const LazyCharactersPage = lazy(
  () => import("../../pages/CharactersPage/CharactersPage")
);
