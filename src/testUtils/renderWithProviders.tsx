import {
  BrowserRouter,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { PreloadedState } from "@reduxjs/toolkit";
import { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { RootState, setupStore, store } from "../store";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/themes/mainTheme";
import GlobalStyle from "../styles/GlobalStyle";
import appRouter from "../routers/routers";

interface RenderWithProvidersProps {
  ui: React.ReactElement;
  preloadedState?: PreloadedState<RootState>;
  preloadedRoutes?: RouteObject[];
}

export const renderWithProviders = ({
  ui,
  preloadedState,
  preloadedRoutes,
}: RenderWithProvidersProps) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;
  const appTestRouter = preloadedRoutes
    ? createBrowserRouter(preloadedRoutes)
    : appRouter;

  const TestWrapperWithRouterProvider = (): React.ReactElement => {
    return (
      <ThemeProvider theme={mainTheme}>
        <Provider store={testStore}>
          <GlobalStyle />
          <RouterProvider router={appTestRouter} />
        </Provider>
      </ThemeProvider>
    );
  };

  const TestWrapperWithBrowserRouter = ({
    children,
  }: PropsWithChildren): React.ReactElement => {
    return (
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          <Provider store={testStore}>{children}</Provider>
        </ThemeProvider>
      </BrowserRouter>
    );
  };

  const TestWrapper = preloadedRoutes
    ? TestWrapperWithRouterProvider
    : TestWrapperWithBrowserRouter;

  render(ui, { wrapper: TestWrapper });
};

export const wrapWithProviders = ({
  children,
}: PropsWithChildren): React.ReactElement => (
  <Provider store={store}>{children}</Provider>
);
