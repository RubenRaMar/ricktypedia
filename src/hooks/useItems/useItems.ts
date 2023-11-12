import _debounce from "debounce";
import { useRef } from "react";
import { HandleItemsRealTimeSearch } from "./types";

const useItems = () => {
  const handleItemsRealTimeSearch = useRef(
    _debounce(async ({ query, loadItems, url }: HandleItemsRealTimeSearch) => {
      loadItems(`${url}/?name=${query}`);
    }, 500)
  ).current;

  return { handleItemsRealTimeSearch };
};

export default useItems;
