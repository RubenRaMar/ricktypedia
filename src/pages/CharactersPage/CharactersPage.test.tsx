import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import CharactersPage from "./CharactersPage";
import userEvent from "@testing-library/user-event";
import { store } from "../../store";

describe("Given a CharactersPage page", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading with de text 'Characters'", async () => {
      const expectedHeadingText = /characters/i;

      renderWithProviders({ ui: <CharactersPage /> });

      const heading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user clicks on the 'next' button", () => {
    test("Then it should call the function nextPage", async () => {
      const expectedButtonText = "Show More";
      const expectedNewCharacterLength = 8;

      renderWithProviders({
        ui: <CharactersPage />,
      });

      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      const charactersLength = store.getState().character.results.length;

      expect(charactersLength).toBe(expectedNewCharacterLength);
    });
  });
});
