import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import EpisodesPage from "./EpisodesPage";
import {
  currentEpisodeStateMock,
  episodesApiMock,
  initialEpisodeStateMock,
} from "../../mocks/episodesMocks/episodesMocks";
import { server } from "../../mocks/apiTest/node";
import { errorHandlers } from "../../mocks/apiTest/handlers";
import userEvent from "@testing-library/user-event";

describe("Given a EpisodesPage page", () => {
  const expectedButtonText = "Show More";

  describe("When its rendered", () => {
    const expetedEpisodeName = currentEpisodeStateMock.episodes[0].name;

    test("Then it should show the 'Episodes' text in a heading", () => {
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

    test("And the 'Show More' button is disabled", () => {
      renderWithProviders({
        ui: <EpisodesPage />,
        preloadedState: {
          episode: {
            ...currentEpisodeStateMock,
            info: { ...currentEpisodeStateMock.info, next: null },
          },
        },
      });

      const showMoreButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(showMoreButton).toBeDisabled();
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

  describe("And the user clicks on the 'Show More' button there is a list of 3 episodes", () => {
    test("Then it should show 6 episode names in headings", async () => {
      const expectedEpisodesLength = 3;
      const expectedNewEpisodesLength = 6;

      renderWithProviders({
        ui: <EpisodesPage />,
        preloadedState: { episode: currentEpisodeStateMock },
      });

      const showMoreButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      const totalheadings = screen.getAllByRole("heading", { level: 2 });

      expect(totalheadings.length).toBe(expectedEpisodesLength);

      await userEvent.click(showMoreButton);

      const headingsWithEpisodesNames = screen.getAllByRole("heading", {
        level: 2,
      });

      expect(headingsWithEpisodesNames.length).toBe(expectedNewEpisodesLength);
    });
  });

  describe("And if the user types 'Morty' in the search input and clicks the search button", () => {
    test("Then it should show 3 episode names in headings", async () => {
      const headingLevel = 2;
      const expectedNewEpisodesLength = 3;
      const searchTextInput = "search";
      const searchTextButton = "search-button";
      const expectText = "Morty";

      renderWithProviders({
        ui: <EpisodesPage />,
        preloadedState: { episode: initialEpisodeStateMock },
      });

      const searchImput = screen.getByLabelText(searchTextInput);
      const searchButton = screen.getByRole("button", {
        name: searchTextButton,
      });

      const headingsWithEpisodesNames = screen.queryByRole("heading", {
        level: headingLevel,
      });

      expect(headingsWithEpisodesNames).not.toBeInTheDocument();

      await userEvent.type(searchImput, expectText);
      await userEvent.click(searchButton);

      const newsHeadingsWithEpisodesNames = screen.getAllByRole("heading", {
        level: headingLevel,
      });

      expect(newsHeadingsWithEpisodesNames.length).toBe(
        expectedNewEpisodesLength
      );
    });
  });

  describe("And if the user select all-episodes in the filter", () => {
    const characterName = episodesApiMock.results[0].name;

    test(`Then it should shpw the heading with the ${characterName} character name`, async () => {
      const seasonSelected = "selected-season";
      const allSeasons = "All seasons";

      renderWithProviders({
        ui: <EpisodesPage />,
        preloadedState: { episode: initialEpisodeStateMock },
      });

      const seasonOption = screen.getByRole("combobox", {
        name: seasonSelected,
      });

      await userEvent.selectOptions(seasonOption, allSeasons);

      const heading = screen.getByRole("heading", {
        name: characterName,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("And if the user select all-episodes in the filter", () => {
    const characterName = episodesApiMock.results[0].name;

    test(`Then it should show the heading with the ${characterName} character name`, async () => {
      const seasonSelected = "selected-season";
      const allSeasons = "All seasons";

      renderWithProviders({
        ui: <EpisodesPage />,
        preloadedState: { episode: initialEpisodeStateMock },
      });

      const seasonOption = screen.getByRole("combobox", {
        name: seasonSelected,
      });

      await userEvent.selectOptions(seasonOption, allSeasons);

      const heading = screen.getByRole("heading", {
        name: characterName,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("And if the user select all-episodes in the filter but there is an error", () => {
    const characterName = episodesApiMock.results[0].name;

    test(`Then it not should show the heading with the ${characterName} character name`, async () => {
      server.resetHandlers(...errorHandlers);

      const seasonSelected = "selected-season";
      const allSeasons = "All seasons";

      renderWithProviders({
        ui: <EpisodesPage />,
        preloadedState: { episode: initialEpisodeStateMock },
      });

      const seasonOption = screen.getByRole("combobox", {
        name: seasonSelected,
      });

      await userEvent.selectOptions(seasonOption, allSeasons);

      const heading = screen.queryByRole("heading", {
        name: characterName,
      });

      expect(heading).not.toBeInTheDocument();
    });
  });
});
