import { screen, waitFor } from "@testing-library/react";
import renderWithProviders from "../../testUtils/renderWithProviders";
import App from "./App";

describe("Given an App component", () => {
  describe("When its rendered", () => {
    test("Then it should show the text 'Characters", async () => {
      const expectedHeading = /characters/i;

      renderWithProviders({
        ui: <App />,
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
