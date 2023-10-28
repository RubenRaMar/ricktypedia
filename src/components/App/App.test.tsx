import { screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "../../store";
import renderWithProviders from "../../testUtils/renderWithProviders";

describe("Given an App component", () => {
  describe("When its rendered", () => {
    test("Then it should show the text 'Rick y Morty", () => {
      const expectedHeading = /rick y morty/i;

      renderWithProviders({
        ui: (
          <Provider store={store}>
            <App />
          </Provider>
        ),
      });

      const text = screen.getByRole("heading", { name: expectedHeading });

      expect(text).toBeInTheDocument();
    });
  });
});
