import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it rendered", () => {
    test("Then it should show a 'Loading...' text", () => {
      const expectedText = "Loading...";

      renderWithProviders({ ui: <Loading /> });

      const loadingText = screen.getByText(expectedText);

      expect(loadingText).toBeInTheDocument();
    });

    test("Then it should show a 'Rick and Morty going through a portal' image", () => {
      const expectedAltText = /rick and morty going through a portal/i;

      renderWithProviders({
        ui: <Loading />,
      });

      const image = screen.getByRole("img", { name: expectedAltText });

      expect(image).toBeInTheDocument();
    });
  });
});
