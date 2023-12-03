import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import FilterSeasons from "./FilterSeasons";
import userEvent from "@testing-library/user-event";

describe("Given a FilterSeasons component", () => {
  const onFilterChange = vi.fn();
  const options = [
    "All seasons",
    "Season 1",
    "Season 2",
    "Season 3",
    "Season 4",
    "Season 5",
  ];

  describe("When its rendered", () => {
    test("Then it should show the 'All seasons', 'Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5' options", () => {
      const onFilterChange = vi.fn();

      renderWithProviders({
        ui: <FilterSeasons onFilterChange={onFilterChange} />,
      });

      options.forEach((option) => {
        const seasonOption = screen.getByRole("option", { name: option });

        expect(seasonOption).toBeInTheDocument();
      });
    });

    describe("When its rendered and a user click the 'All seasons' option", () => {
      test("Then it should call the onFilterChange funtion", async () => {
        const seasonSelected = "selected-season";
        const allSeasonsOption = options[0];

        renderWithProviders({
          ui: <FilterSeasons onFilterChange={onFilterChange} />,
        });

        const seasonOption = screen.getByRole("combobox", {
          name: seasonSelected,
        });

        await userEvent.selectOptions(seasonOption, allSeasonsOption);

        expect(onFilterChange).toHaveBeenCalled();
      });
    });
  });
});
