import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import App from "./App";
import routes from "../../routers/routes";

describe("Given an App component", () => {
  describe("When its rendered", () => {
    test("Then it should show the text 'Characters", async () => {
      const expectedHeading = /characters/i;

      renderWithProviders({
        ui: <App />,
        preloadedRoutes: routes,
      });

      await waitFor(() => {
        const text = screen.getByRole("heading", {
          name: expectedHeading,
        });

        expect(text).toBeInTheDocument();
      });
    });
  });
});
