import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import MainHeader from "./MainHeader";
import routes from "../../routers/routes";

describe("Given a MainHeader component", () => {
  describe("When its rendered", () => {
    test("Then it should show a image  the 'Logo of the animated series Rick and Morty'", () => {
      const expectedAtlText = /logo of the animated series rick and morty/i;

      renderWithProviders({
        ui: <MainHeader />,
        preloadedState: {},
        preloadedRoutes: routes,
      });

      const image = screen.getByAltText(expectedAtlText);

      expect(image).toBeInTheDocument();
    });
  });
});
