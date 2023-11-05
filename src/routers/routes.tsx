import { RouteObject, Navigate } from "react-router-dom";
import { characterPaths, partialsPaths } from "../constants/paths/paths";
import App from "../components/App/App";
import { Suspense } from "react";
import {
  CharacterDetailsPage,
  LazyCharactersPage,
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
        path: `${characterPaths.characterDetailsId}`,
        element: (
          <Suspense>
            <CharacterDetailsPage />
          </Suspense>
        ),
      },
    ],
  },
];

export default routes;
