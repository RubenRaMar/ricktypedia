import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import FormSearchStyled from "./FormSearchStyled";
import { useEffect, useRef, useState, useCallback } from "react";
import Button from "../Button/Button";

interface SearchCharactersProps {
  onSearchChange: (value: string) => void;
  placeholder: "Ricky, Morty, Summer..." | "Pilot, Lawnmower Dog...";
}

const FormSearch = ({
  onSearchChange,
  placeholder,
}: SearchCharactersProps): React.ReactElement => {
  const [nameToSearch, setNameToSearch] = useState("");
  const actualSearch = useRef("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameToSearch(event.target.value);
  };

  const searchCharacters = useCallback(() => {
    if (actualSearch.current === nameToSearch) {
      return;
    }

    actualSearch.current = nameToSearch;

    onSearchChange(nameToSearch);
  }, [nameToSearch, onSearchChange]);

  const handleSearchCharactersSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    searchCharacters();
  };

  useEffect(() => {
    searchCharacters();
  }, [searchCharacters]);

  return (
    <FormSearchStyled
      aria-label="search-Form"
      onSubmit={handleSearchCharactersSubmit}
    >
      <label htmlFor="search">
        <input
          aria-label="search"
          type="text"
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
        icon={faMagnifyingGlass}
        modifier={["small"]}
        isDisabled={false}
      />
    </FormSearchStyled>
  );
};

export default FormSearch;
