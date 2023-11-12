import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import EpisodesPage from "./EpisodesPage";
import { server } from "../../mocks/apiTest/node";
import { errorHandlers } from "../../mocks/apiTest/handlers";

describe("Given a EpisodesPage page", () => {
  describe("When its rendered", () => {
    test("Then it should show the 'Episodes' text in the heading", () => {
      const episodeText = /episodes/i;

      renderWithProviders({ ui: <EpisodesPage /> });

      const heading = screen.getByRole("heading", { name: episodeText });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show the 'Episodes' text in the heading", () => {
      server.resetHandlers(...errorHandlers);

      const episodeText = /episodes/i;

      renderWithProviders({ ui: <EpisodesPage /> });

      const heading = screen.getByRole("heading", { name: episodeText });

      expect(heading).toBeInTheDocument();
    });
  });
});
