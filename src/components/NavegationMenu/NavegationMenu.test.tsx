import { screen } from "@testing-library/react";
import NavegationMenu from "./NavegationMenu";
import { renderWithProviders } from "../../testUtils/renderWithProviders";

describe("Given a NavegationMenu component", () => {
  describe("When its rendered", () => {
    test("Then it should show a link with the 'Home' text", () => {
      const expectedLink = /home/i;

      renderWithProviders({ ui: <NavegationMenu /> });

      const homeLink = screen.getByRole("link", { name: expectedLink });

      expect(homeLink).toBeInTheDocument();
    });
  });
});
