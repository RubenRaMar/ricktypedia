import { useState } from "react";
import SearchStyled from "./FormSearchStyled";
import { useAppDispatch } from "../../store";
import { loadCharactersActionCreator } from "../../store/characters/charactersSlice";
import useCharacter from "../../hooks/useCharacter/useCharacter";
import { apiPaths } from "../../constants/paths/paths";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { initialCharactersState } from "../../data/characters/characters";
import Button from "../Button/Button";

const FormSearch = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getCharacterList } = useCharacter();
  const [{ search }, setQuery] = useState({ search: "" });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery((query) => ({
      ...query,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSearchCharactersSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const characters = await getCharacterList(
      `${apiPaths.character}/?name=${search}`
    );

    if (!characters) {
      dispatch(loadCharactersActionCreator(initialCharactersState));
    }

    if (characters) {
      dispatch(loadCharactersActionCreator(characters));
    }
  };

  return (
    <SearchStyled onSubmit={handleSearchCharactersSubmit}>
      <label htmlFor="search">
        <input
          aria-label="search"
          type="text"
          id="search"
          onChange={handleOnChange}
          value={search}
          autoComplete="off"
          placeholder="Ricky, Morty, Jerry..."
        />
      </label>
      <Button
        label="search-button"
        type="submit"
        content={faMagnifyingGlass}
        modifier="small"
        isDisabled={false}
      />
    </SearchStyled>
  );
};

export default FormSearch;
