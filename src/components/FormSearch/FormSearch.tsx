import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import FormSearchStyled from "./FormSearchStyled";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

interface SearchCharactersProps {
  onSearchChange: (value: string) => void;
}

const FormSearch = ({
  onSearchChange,
}: SearchCharactersProps): React.ReactElement => {
  const [nameToSearch, setNameToSearch] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameToSearch(event.target.value);
  };

  const handleSearchCharactersSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    onSearchChange(nameToSearch);
  };

  useEffect(() => {
    onSearchChange(nameToSearch);
  }, [onSearchChange, nameToSearch]);

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
          placeholder="Ricky, Morty, Summer..."
        />
      </label>
      <Button
        label="search-button"
        type="submit"
        content={faMagnifyingGlass}
        modifier="small"
        isDisabled={false}
      />
    </FormSearchStyled>
  );
};

export default FormSearch;
