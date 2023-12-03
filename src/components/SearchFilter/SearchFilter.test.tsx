import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import SearchFilter from "./SearchFilter";
import userEvent from "@testing-library/user-event";

afterEach(() => {
  vi.clearAllMocks();
});

describe("Given a SearchFilter component", () => {
  const actionOnClick = vi.fn();
  const searchTextInput = "search";
  const searchTextButton = "search-button";
  const expectText = "morty";

  describe("When its rendered", () => {
    test("Then it should show a 'search' input", () => {
      renderWithProviders({
        ui: (
          <SearchFilter
            placeholder="Pilot, Lawnmower Dog..."
            onSearchChange={actionOnClick}
          />
        ),
      });

      const searchInput = screen.getByLabelText(searchTextInput);

      expect(searchInput).toBeInTheDocument();
    });

    test("Then it should show a 'search-button' button", () => {
      renderWithProviders({
        ui: (
          <SearchFilter
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

  describe("When rendering and a user types 'Morty' in search input", () => {
    test("Then it should show 'morty' in the search input", async () => {
      renderWithProviders({
        ui: (
          <SearchFilter
            placeholder="Pilot, Lawnmower Dog..."
            onSearchChange={actionOnClick}
          />
        ),
      });

      const searchInput = screen.getByLabelText(searchTextInput);

      await userEvent.type(searchInput, expectText);

      expect(searchInput).toHaveValue(expectText);
    });
  });

  describe("And if user click on the search button", () => {
    test("Then it should call the actionOnClick function", async () => {
      renderWithProviders({
        ui: (
          <SearchFilter
            placeholder="Pilot, Lawnmower Dog..."
            onSearchChange={actionOnClick}
          />
        ),
      });

      const searchInput = screen.getByLabelText(searchTextInput);
      const searchButton = screen.getByRole("button", {
        name: searchTextButton,
      });

      await userEvent.type(searchInput, expectText);

      await userEvent.click(searchButton);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
