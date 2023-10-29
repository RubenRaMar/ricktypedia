import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import CharactersPage from "./CharactersPage";

describe("Given a CharactersPage page", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading with de text 'Characters'", async () => {
      const expectedHeadingText = /characters/i;

      renderWithProviders({ ui: <CharactersPage /> });

      await waitFor(() => {
        const heading = screen.getByRole("heading", {
          name: expectedHeadingText,
        });

        expect(heading).toBeInTheDocument();
      });
    });
  });
});
