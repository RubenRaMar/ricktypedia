import { RouteObject, Navigate } from "react-router-dom";
import { itemsPaths, partialsPaths } from "../constants/paths/paths";
import App from "../components/App/App";
import { Suspense } from "react";
import {
  LazyCharacterDetailsPage,
  LazyCharactersPage,
  LazyEpisodesPage,
} from "./lazyPages/lazyPages";

const routes: RouteObject[] = [
  {
    path: `${partialsPaths.base}`,
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={`${partialsPaths.character}`} replace />,
      },
      {
        path: `${partialsPaths.character}`,
        element: (
          <Suspense>
            <LazyCharactersPage />
          </Suspense>
        ),
      },
      {
        path: `${itemsPaths.characterDetailsId}`,
        element: (
          <Suspense>
            <LazyCharacterDetailsPage />
          </Suspense>
        ),
      },
      {
        path: `${partialsPaths.episode}`,
        element: (
          <Suspense>
            <LazyEpisodesPage />
          </Suspense>
        ),
      },
    ],
  },
];

export default routes;
