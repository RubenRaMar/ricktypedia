import { screen } from "@testing-library/react";
import { arisaCyborgCharacterMock } from "../../mocks/charactersMocks/charactersMocks";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import EpisodesMenu from "./EpisodesMenu";
import userEvent from "@testing-library/user-event";

describe("Given a EpisodesMenu component", () => {
  const buttonText = "Episodes";
  const episodes = arisaCyborgCharacterMock.episode;

  describe("When its rendered", () => {
    test("Then it shoul a button with the text 'Episodes'", () => {
      renderWithProviders({
        ui: <EpisodesMenu episodes={episodes} />,
      });

      const episodesButton = screen.getByRole("button", { name: buttonText });

      expect(episodesButton).toBeInTheDocument();
    });
  });

  describe("And if you click on the 'Episodes' button", () => {
    test("Then it should expand a list of episodes", async () => {
      renderWithProviders({
        ui: <EpisodesMenu episodes={episodes} />,
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
        ui: <EpisodesMenu episodes={episodes} />,
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
