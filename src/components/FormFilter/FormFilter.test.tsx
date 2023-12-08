import { screen } from "@testing-library/dom";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import userEvent from "@testing-library/user-event";
import { store } from "../../store";
import { server } from "../../mocks/apiTest/node";
import { errorHandlers } from "../../mocks/apiTest/handlers";
import FormFilter from "./FormFilter";

describe("Given a FormFilter component", () => {
  const actionOnClick = vi.fn();
  const searchTextInput = "search";
  const searchTextButton = "search-button";
  const expectText = "morty";

  describe("When its rendered", () => {
    test("Then it should show a 'search-button' button", () => {
      renderWithProviders({
        ui: (
          <FormFilter
            placeholder="Pilot, Lawnmower Dog..."
            onSearchChange={actionOnClick}
          />
        ),
      });

      const searchButton = screen.getByRole("button", {
        name: searchTextButton,
      });

      expect(searchButton).toBeInTheDocument();
    });
  });

  describe("And if you click on the search button and there aren't characters", () => {
    test("Then it should be a list without characters", async () => {
      server.resetHandlers(...errorHandlers);

      const newCharacterLength = 0;

      renderWithProviders({
        ui: (
          <FormFilter
            placeholder="Ricky, Morty, Summer..."
            onSearchChange={actionOnClick}
          />
        ),
      });

      const searchImput = screen.getByLabelText(searchTextInput);
      const searchButton = screen.getByRole("button", {
        name: searchTextButton,
      });

      await userEvent.type(searchImput, expectText);

      await userEvent.click(searchButton);

      const charactersLength = store.getState().character.results.length;

      expect(charactersLength).toBe(newCharacterLength);
    });
  });
});
