import { renderHook, waitFor } from "@testing-library/react";
import useItems from "./useItems";
import { wrapWithProviders } from "../../testUtils/renderWithProviders";
import { HandleItemsRealTimeSearch } from "./types";

describe("Given a handleItemsRealTimeSearch function", () => {
  describe("When its invoked with an 'exemple' query, a mockLoadItems function and a url 'https://example'", () => {
    test("Then it should call the mockLoadItems function with a url 'https://example/?name=example'", async () => {
      const mockLoadItems = vi.fn();
      const expectedUrl = "https://example/?name=example";
      const itemsRealTimeSearch: HandleItemsRealTimeSearch = {
        query: "example",
        loadItems: mockLoadItems,
        url: "https://example",
      };

      const {
        result: {
          current: { handleItemsRealTimeSearch: handleSearchItems },
        },
      } = renderHook(() => useItems(), { wrapper: wrapWithProviders });

      handleSearchItems(itemsRealTimeSearch);

      await waitFor(() => {
        expect(mockLoadItems).toHaveBeenCalledWith(expectedUrl);
      });
    });
  });
});
