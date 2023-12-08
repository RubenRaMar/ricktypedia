import { useState, useRef, useEffect } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import FilterStyled from "../../styles/shared/FilterStyled";
import useItems from "../../hooks/useItems/useItems";

interface SearchFilterProps {
  placeholder: "Ricky, Morty, Summer..." | "Pilot, Lawnmower Dog...";
  onSearchChange: (value: string) => void;
}

const SearchFilter = ({
  placeholder,
  onSearchChange,
}: SearchFilterProps): React.ReactElement => {
  const { searchItems } = useItems();
  const [nameToSearch, setNameToSearch] = useState("");
  const actualSearch = useRef("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameToSearch(event.target.value);
  };

  const handleSearchItemsSubmit = () => {
    searchItems({ actualSearch, nameToSearch, onSearchChange });
  };

  useEffect(() => {
    searchItems({ actualSearch, nameToSearch, onSearchChange });
  }, [nameToSearch, onSearchChange, searchItems]);

  return (
    <FilterStyled>
      <label htmlFor="search">
        <input
          aria-label="search"
          type="search"
          id="search"
          onChange={handleOnChange}
          value={nameToSearch}
          autoComplete="off"
          placeholder={placeholder}
        />
      </label>
      <Button
        label="search-button"
        type="submit"
        actionOnClick={handleSearchItemsSubmit}
        icon={faMagnifyingGlass}
        modifiers={["small"]}
        isDisabled={false}
      />
    </FilterStyled>
  );
};

export default SearchFilter;
