import { renderHook } from "@testing-library/react";
import { apiPaths } from "../../constants/paths/paths";
import useEpisodes from "./useEpisodes";
import { wrapWithProviders } from "../../testUtils/renderWithProviders";
import { newEpisodesStateMock } from "../../mocks/episodesMocks/episodesMocks";
import { server } from "../../mocks/apiTest/node";
import { errorHandlers } from "../../mocks/apiTest/handlers";
import { store } from "../../store";

describe("Given getEpisodes function", () => {
  describe(`When it invoked with the url "${apiPaths.episode}"`, () => {
    test("Then it should return a episode list and their info", async () => {
      const {
        result: {
          current: { getEpisodes },
        },
      } = renderHook(() => useEpisodes(), { wrapper: wrapWithProviders });

      const episodes = await getEpisodes(apiPaths.episode);

      expect(episodes).toStrictEqual(newEpisodesStateMock);
    });
  });

  describe(`When it invoked with the url "${apiPaths.episode} but there is an error"`, () => {
    test("Then it should return a empty episode list", async () => {
      server.resetHandlers(...errorHandlers);

      const expectedEpisodesLength = 0;

      const {
        result: {
          current: { getEpisodes },
        },
      } = renderHook(() => useEpisodes(), { wrapper: wrapWithProviders });

      await getEpisodes(apiPaths.episode);

      const episodesLength = store.getState().episode.episodes.length;

      expect(episodesLength).toStrictEqual(expectedEpisodesLength);
    });
  });
});
