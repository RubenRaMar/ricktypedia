import { screen } from "@testing-library/react";
import { arisaCyborgCharacterMock } from "../../mocks/characters/characters";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Episodes from "./Episodes";
import userEvent from "@testing-library/user-event";

describe("Given a Episodes component", () => {
  const buttonText = "Episodes";
  const episodes = arisaCyborgCharacterMock.episode;

  describe("When its rendered", () => {
    test("Then it shoul a button with de text 'Episodes'", () => {
      renderWithProviders({
        ui: <Episodes episodes={episodes} />,
      });

      const episodesButton = screen.getByRole("button", { name: buttonText });

      expect(episodesButton).toBeInTheDocument();
    });
  });

  describe("And if you click on the 'Episodes' button", () => {
    test("Then it should expand a list of episodes", async () => {
      renderWithProviders({
        ui: <Episodes episodes={episodes} />,
      });

      const episodesButton = screen.getByRole("button", { name: buttonText });

      await userEvent.click(episodesButton);

      const expandedLinks = screen.getAllByRole("link", { expanded: true });

      expandedLinks.forEach((expandedLink) =>
        expect(expandedLink).toBeInTheDocument()
      );
    });

    test("And should show the episodes names", async () => {
      renderWithProviders({
        ui: <Episodes episodes={episodes} />,
      });

      const episodesButton = screen.getByRole("button", { name: buttonText });

      await userEvent.click(episodesButton);

      episodes.forEach((episode) => {
        const expandedLinks = screen.getByRole("link", {
          name: `Episode ${episode.split("/").pop()}`,
        });

        expect(expandedLinks).toBeInTheDocument();
      });
    });
  });
});
