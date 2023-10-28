import { RouteObject, Navigate } from "react-router-dom";
import routerPaths from "../constants/routerPaths/routerPaths";
import App from "../components/App/App";
import { Suspense } from "react";
import { LazyCharactersPage } from "./lazyPages/lazyPages";

const routes: RouteObject[] = [
  {
    path: `${routerPaths.base}`,
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={`${routerPaths.characters}`} replace />,
      },
      {
        path: `${routerPaths.characters}`,
        element: (
          <Suspense>
            <LazyCharactersPage />
          </Suspense>
        ),
      },
    ],
  },
];

export default routes;
