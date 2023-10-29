import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import CharactersPage from "./CharactersPage";
import { server } from "../../mocks/apiTest/server";

describe("Given a CharactersPage page", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading with de text 'Characters'", async () => {
      server.listen();

      const expectedHeadingText = /characters/i;

      renderWithProviders({ ui: <CharactersPage /> });

      const heading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
