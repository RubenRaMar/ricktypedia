import { screen } from "@testing-library/react";
import NavegationMenu from "./NavegationMenu";
import { renderWithProviders } from "../../testUtils/renderWithProviders";

describe("Given a NavegationMenu component", () => {
  describe("When its rendered", () => {
    test("Then it should show a link with the text 'characters'", () => {
      const expectedLink = /characters/i;

      renderWithProviders({ ui: <NavegationMenu /> });

      const homeLink = screen.getByRole("link", { name: expectedLink });

      expect(homeLink).toBeInTheDocument();
    });

    test("And a link with the text 'episodes'", () => {
      const expectedLink = /episodes/i;

      renderWithProviders({ ui: <NavegationMenu /> });

      const homeLink = screen.getByRole("link", { name: expectedLink });

      expect(homeLink).toBeInTheDocument();
    });
  });
});
