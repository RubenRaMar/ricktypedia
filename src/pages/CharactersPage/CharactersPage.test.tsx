import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import CharactersPage from "./CharactersPage";
import userEvent from "@testing-library/user-event";
import { store } from "../../store";
import {
  currentCharactersStateMock,
  initialCharactersStateMock,
  resultsMock,
} from "../../mocks/charactersMocks/charactersMocks";
import { server } from "../../mocks/apiTest/node";
import { errorHandlers } from "../../mocks/apiTest/handlers";

describe("Given a CharactersPage page", () => {
  const expectedButtonText = "Show More";

  describe("When its rendered", () => {
    test("Then it should show a heading with the text 'Characters'", async () => {
      const expectedHeadingText = /characters/i;

      renderWithProviders({ ui: <CharactersPage /> });

      const heading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });

    test(`And the heading with ${currentCharactersStateMock.results[0].name}'s name`, async () => {
      const expectedHeadingText = currentCharactersStateMock.results[0].name;

      renderWithProviders({
        ui: <CharactersPage />,
        preloadedState: { character: currentCharactersStateMock },
      });

      const heading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When its rendered but there aren't characters to show", () => {
    test("Then it should show the text 'No characters matching your search were found'", async () => {
      server.resetHandlers(...errorHandlers);

      const text = "No characters matching your search were found";

      renderWithProviders({
        ui: <CharactersPage />,
        preloadedState: { character: initialCharactersStateMock },
      });

      const textElement = screen.getByText(text);

      expect(textElement).toBeInTheDocument();
    });

    test("And the 'Show More' button is disabled", () => {
      renderWithProviders({
        ui: <CharactersPage />,
        preloadedState: {
          character: {
            ...currentCharactersStateMock,
            info: { ...currentCharactersStateMock.info, next: null },
          },
        },
      });

      const showMoreButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(showMoreButton).toBeDisabled();
    });
  });

  describe("When it is rendered and the user clicks on the 'next' button", () => {
    test("Then it should call the function nextPage", async () => {
      const expectedNewCharacterLength = 8;

      renderWithProviders({
        ui: <CharactersPage />,
      });

      const showMoreButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.click(showMoreButton);

      const charactersLength = store.getState().character.results.length;

      await userEvent.click(showMoreButton);

      expect(charactersLength).toBe(expectedNewCharacterLength);
    });
  });

  describe("When rendering and a user types 'Morty' in search input and click on the search button", () => {
    const characterName = resultsMock[0].name;
    const searchTextInput = "search";
    const searchTextButton = "search-button";
    const expectText = "morty";

    test(`Then it should show the name of the character ${characterName} in a heading`, async () => {
      renderWithProviders({
        ui: <CharactersPage />,
      });

      const searchImput = screen.getByLabelText(searchTextInput);
      const searchButton = screen.getByRole("button", {
        name: searchTextButton,
      });

      await userEvent.type(searchImput, expectText);

      await userEvent.click(searchButton);

      const heading = screen.getByRole("heading", {
        name: characterName,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
