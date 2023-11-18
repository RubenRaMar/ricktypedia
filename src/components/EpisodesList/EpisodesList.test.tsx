import { screen } from "@testing-library/react";
import { currentEpisodeStateMock } from "../../mocks/episodesMocks/episodesMocks";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import EpisodesList from "./EpisodesList";

describe("Given a EpisodesList component", () => {
  describe("When its rendered", () => {
    test("And the ${episodeName} title in the heading", () => {
      const episodeName = currentEpisodeStateMock.episodes[0].name;

      renderWithProviders({
        ui: <EpisodesList />,
        preloadedState: { episode: currentEpisodeStateMock },
      });

      const heading = screen.getByRole("heading", {
        name: episodeName,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
