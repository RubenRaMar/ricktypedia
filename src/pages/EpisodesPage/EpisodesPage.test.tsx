import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import EpisodesPage from "./EpisodesPage";
import {
  currentEpisodeStateMock,
  initialEpisodeStateMock,
} from "../../mocks/episodesMocks/episodesMocks";
import { server } from "../../mocks/apiTest/node";
import { errorHandlers } from "../../mocks/apiTest/handlers";

describe("Given a EpisodesPage page", () => {
  describe("When its rendered", () => {
    const expetedEpisodeName = currentEpisodeStateMock.episodes[0].name;

    test("Then it should show the 'Episodes' text in the heading", () => {
      const episodeText = /episodes/i;

      renderWithProviders({ ui: <EpisodesPage /> });

      const heading = screen.getByRole("heading", { name: episodeText });

      expect(heading).toBeInTheDocument();
    });

    test(`And a heading with a ${expetedEpisodeName}'s episode name`, async () => {
      renderWithProviders({
        ui: <EpisodesPage />,
        preloadedState: { episode: currentEpisodeStateMock },
      });

      const heading = screen.getByRole("heading", {
        name: expetedEpisodeName,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("And there aren't episodes to show", () => {
    test("Then it should show the text 'No episodes matching your search were found'", async () => {
      server.resetHandlers(...errorHandlers);

      const text = "No episodes matching your search were found";

      renderWithProviders({
        ui: <EpisodesPage />,
        preloadedState: { episode: initialEpisodeStateMock },
      });

      const textElement = await screen.findByText(text);

      await waitFor(() => expect(textElement).toBeInTheDocument());
    });
  });
});
