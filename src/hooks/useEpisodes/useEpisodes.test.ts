import { renderHook } from "@testing-library/react";
import { apiPaths } from "../../constants/paths/paths";
import useEpisodes from "./useEpisodes";
import { wrapWithProviders } from "../../testUtils/renderWithProviders";
import {
  initialEpisodeDataMock,
  newEpisodesStateMock,
} from "../../mocks/episodesMocks/episodesMocks";
import { server } from "../../mocks/apiTest/node";
import { errorHandlers, handlers } from "../../mocks/apiTest/handlers";
import { store } from "../../store";
import { EpisodesStateStructure } from "../../data/episodes/types";
import { initialEpisodesState } from "../../data/episodes/episodes";

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

describe("Given a loadEpisodes hook", () => {
  const episodesState: EpisodesStateStructure = {
    ...newEpisodesStateMock,
    episodeData: initialEpisodeDataMock,
  };

  describe(`When it invoked with the path "${apiPaths.episode}/?name="`, () => {
    test("Then it should return a episodes list and its info", async () => {
      server.resetHandlers(...handlers);

      const {
        result: {
          current: { loadEpisodes },
        },
      } = renderHook(() => useEpisodes(), { wrapper: wrapWithProviders });

      await loadEpisodes(`${apiPaths.episode}/?name=`);

      const episodes = store.getState().episode;

      expect(episodes).toStrictEqual(episodesState);
    });
  });

  describe(`When it invoked with the path "${apiPaths.episode}/?name="  but there is an error`, () => {
    test("Then it should return a empty episodes list", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { loadEpisodes },
        },
      } = renderHook(() => useEpisodes(), { wrapper: wrapWithProviders });

      await loadEpisodes(`${apiPaths.episode}/?name=`);

      const episodeLength = store.getState().episode.episodes.length;

      expect(episodeLength).toStrictEqual(initialEpisodesState.episodes.length);
    });
  });
});
