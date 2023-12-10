import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import "@fontsource/lexend";
import "@fontsource/playpen-sans";
import "@fontsource/playpen-sans/500.css";
import { store } from "./store";
import appRouter from "./routers/routers";
import GlobalStyle from "./styles/GlobalStyle";
import mainTheme from "./styles/themes/mainTheme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
