import { renderHook, waitFor } from "@testing-library/react";
import useItems from "./useItems";
import { wrapWithProviders } from "../../testUtils/renderWithProviders";
import { HandleItemsRealTimeSearch } from "./types";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a handleItemsRealTimeSearch function", () => {
  describe("When its invoked with an 'exemple' query, a mockLoadItems function and a url 'https://example'", () => {
    test("Then it should call the mockLoadItems function with a url 'https://example/?name=example'", async () => {
      const mockLoadItems = vi.fn();
      const expectedUrl = "https://example/?name=example&&episode=example";
      const itemsRealTimeSearch: HandleItemsRealTimeSearch = {
        query: "example",
        loadItems: mockLoadItems,
        url: "https://example",
        episode: "example",
      };

      const {
        result: {
          current: { handleItemsRealTimeSearch },
        },
      } = renderHook(() => useItems(), { wrapper: wrapWithProviders });

      handleItemsRealTimeSearch(itemsRealTimeSearch);

      await waitFor(() => {
        expect(mockLoadItems).toHaveBeenCalledWith(expectedUrl);
      });
    });
  });
});

describe("Given a searchItems function", () => {
  const actualSearch = { current: "Morty" };
  const nameToSearch = "Rick";
  const onSearchChange = vi.fn();

  describe("When its rendered and receives a onSearchChange function, a 'Morty' actual search and 'Rick' name to search", () => {
    test("Then it should call the onSearchChange function", () => {
      const {
        result: {
          current: { searchItems },
        },
      } = renderHook(() => useItems(), { wrapper: wrapWithProviders });

      searchItems({
        actualSearch,
        nameToSearch,
        onSearchChange,
      });

      expect(onSearchChange).toHaveBeenCalled();
    });
  });

  describe("When its rendered and receives a onSearchChange function, a 'Morty' actual search and 'Morty' name to search", () => {
    test("Then it should call the onSearchChange function", () => {
      const {
        result: {
          current: { searchItems },
        },
      } = renderHook(() => useItems(), { wrapper: wrapWithProviders });

      searchItems({
        actualSearch,
        nameToSearch,
        onSearchChange,
      });

      expect(onSearchChange).not.toHaveBeenCalled();
    });
  });
});
