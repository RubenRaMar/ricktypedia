import { screen } from "@testing-library/dom";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import FormSearch from "./FormSearch";
import userEvent from "@testing-library/user-event";
import { store } from "../../store";
import { server } from "../../mocks/apiTest/node";
import { errorHandlers } from "../../mocks/apiTest/handlers";

describe("Given a FormSearch component", () => {
  const searchTextInput = "search";
  const searchTextButton = "search-button";
  const expectText = "morty";

  describe("When its rendered", () => {
    test("Then it should show a 'search' imput", () => {
      renderWithProviders({ ui: <FormSearch /> });

      const searchImput = screen.getByLabelText(searchTextInput);

      expect(searchImput).toBeInTheDocument();
    });

    test("Then it should show a 'search-button' button", () => {
      renderWithProviders({ ui: <FormSearch /> });

      const searchButton = screen.getByRole("button", {
        name: searchTextButton,
      });

      expect(searchButton).toBeInTheDocument();
    });
  });

  describe("When rendering and a user types 'Morty' in search input", () => {
    test("Then it should show 'morty' in the search input", async () => {
      renderWithProviders({ ui: <FormSearch /> });

      const searchImput = screen.getByLabelText(searchTextInput);

      await userEvent.type(searchImput, expectText);

      expect(searchImput).toHaveValue(expectText);
    });
  });

  describe("And if you click on the search button", () => {
    test("Then it should be a list of 4 characters", async () => {
      const newCharacterLength = 4;

      renderWithProviders({ ui: <FormSearch /> });

      const searchImput = screen.getByLabelText(searchTextInput);

      await userEvent.type(searchImput, expectText);

      const searchButton = screen.getByRole("button", {
        name: searchTextButton,
      });

      await userEvent.click(searchButton);

      const charactersLength = store.getState().character.results.length;

      expect(charactersLength).toBe(newCharacterLength);
    });
  });

  describe("And if you click on the search button and there aren't characters", () => {
    test("Then it should be a list without characters", async () => {
      server.resetHandlers(...errorHandlers);

      const newCharacterLength = 0;

      renderWithProviders({
        ui: <FormSearch />,
      });

      const searchImput = screen.getByLabelText(searchTextInput);

      await userEvent.type(searchImput, expectText);

      const searchButton = screen.getByRole("button", {
        name: searchTextButton,
      });

      await userEvent.click(searchButton);

      const charactersLength = store.getState().character.results.length;

      expect(charactersLength).toBe(newCharacterLength);
    });
  });
});
