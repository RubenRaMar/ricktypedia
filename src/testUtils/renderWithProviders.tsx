import { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { RootState, setupStore, store } from "../store";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/themes/mainTheme";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { render } from "@testing-library/react";
import routes from "../routers/routes";

interface RenderWithProvidersProps {
  ui: React.ReactElement;
  preloadedState?: PreloadedState<RootState>;
  preloadedRoutes?: RouteObject[];
}

const renderWithProviders = ({
  ui,
  preloadedState,
  preloadedRoutes,
}: RenderWithProvidersProps) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;
  const testRoutes = preloadedRoutes ? preloadedRoutes : routes;
  const appTestRouter = createBrowserRouter(testRoutes);

  const TestWrapper = (): React.ReactElement => {
    return (
      <ThemeProvider theme={mainTheme}>
        <Provider store={testStore}>
          <RouterProvider router={appTestRouter} />
        </Provider>
      </ThemeProvider>
    );
  };

  render(ui, { wrapper: TestWrapper });
};

export default renderWithProviders;
