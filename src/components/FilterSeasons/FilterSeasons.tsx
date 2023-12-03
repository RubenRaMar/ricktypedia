import FilterSeasonsStyled from "./FilterSeasonsStyled";

interface FilterSeasonsProps {
  onFilterChange: (season: string) => void;
}

const FilterSeasons = ({
  onFilterChange,
}: FilterSeasonsProps): React.ReactElement => {
  const handleSeasonFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const season = event.target.value;

    onFilterChange(season);
  };

  return (
    <FilterSeasonsStyled>
      <select onChange={handleSeasonFilter}>
        <option hidden>Seasons</option>
        <option value="">All seasons</option>
        <option value="S01">Season 1</option>
        <option value="S02">Season 2</option>
        <option value="S03">Season 3</option>
        <option value="S04">Season 4</option>
        <option value="S05">Season 5</option>
      </select>
    </FilterSeasonsStyled>
  );
};

export default FilterSeasons;
