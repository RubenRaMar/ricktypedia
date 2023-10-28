import { RouteObject, Navigate } from "react-router-dom";
import routerPaths from "../constants/routerPaths/routerPaths";
import App from "../components/App/App";

const routes: RouteObject[] = [
  {
    path: `${routerPaths.base}`,
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={`${routerPaths.base}`} replace />,
      },
    ],
  },
];

export default routes;
