import FilterSeasons from "../FilterSeasons/FilterSeasons";
import SearchFilter from "../SearchFilter/SearchFilter";
import FormFilterStyled from "./FormFilterStyled";

interface FormFilterProps {
  onSearchChange?: (value: string) => void;
  onFilterChange?: (value: string) => void;
  placeholder: "Ricky, Morty, Summer..." | "Pilot, Lawnmower Dog...";
}

const FormFilter = ({
  onSearchChange,
  onFilterChange,
  placeholder,
}: FormFilterProps): React.ReactElement => {
  const handleSearchItemsSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormFilterStyled onSubmit={handleSearchItemsSubmit}>
      {onFilterChange && <FilterSeasons onFilterChange={onFilterChange} />}
      {onSearchChange && (
        <SearchFilter
          placeholder={placeholder}
          onSearchChange={onSearchChange}
        />
      )}
    </FormFilterStyled>
  );
};

export default FormFilter;
