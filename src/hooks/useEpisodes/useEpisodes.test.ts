import { renderHook } from "@testing-library/react";
import { apiPaths } from "../../constants/paths/paths";
import useEpisodes from "./useEpisodes";
import { wrapWithProviders } from "../../testUtils/renderWithProviders";
import { newEpisodesStateMock } from "../../mocks/episodesMocks/episodesMocks";

describe("Given getEpisodes function", () => {
  describe(`When it invoked with the url "${apiPaths.episode}"`, () => {
    test.only("Then it should return a episode list and their info", async () => {
      const {
        result: {
          current: { getEpisodes },
        },
      } = renderHook(() => useEpisodes(), { wrapper: wrapWithProviders });

      const episodes = await getEpisodes(apiPaths.episode);

      expect(episodes).toStrictEqual(newEpisodesStateMock);
    });
  });
});
