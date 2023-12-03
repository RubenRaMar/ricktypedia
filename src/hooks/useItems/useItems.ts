import _debounce from "debounce";
import { useRef, useCallback } from "react";
import { HandleItemsRealTimeSearch, SearchItemsStructure } from "./types";

const useItems = () => {
  const searchItems = useCallback(
    ({ actualSearch, nameToSearch, onSearchChange }: SearchItemsStructure) => {
      if (actualSearch.current === nameToSearch) {
        return;
      }

      actualSearch.current = nameToSearch;

      if (onSearchChange) {
        onSearchChange(nameToSearch);
      }
    },
    []
  );

  const handleItemsRealTimeSearch = useRef(
    _debounce(
      async ({ query, loadItems, url, episode }: HandleItemsRealTimeSearch) => {
        loadItems(`${url}/?name=${query}&&episode=${episode}`);
      },
      500
    )
  ).current;

  return { handleItemsRealTimeSearch, searchItems };
};

export default useItems;
