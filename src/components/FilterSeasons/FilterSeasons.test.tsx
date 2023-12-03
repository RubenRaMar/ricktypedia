import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import FilterSeasons from "./FilterSeasons";

describe("Given a FilterSeasons component", () => {
  describe("When its rendered", () => {
    test("Then it should show the 'All seasons', 'Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5' options", () => {
      const options = [
        "All seasons",
        "Season 1",
        "Season 2",
        "Season 3",
        "Season 4",
        "Season 5",
      ];
      const onFilterChange = vi.fn();

      renderWithProviders({
        ui: <FilterSeasons onFilterChange={onFilterChange} />,
      });

      options.forEach((option) => {
        const seasonOption = screen.getByRole("option", { name: option });

        expect(seasonOption).toBeInTheDocument();
      });
    });
  });
});
