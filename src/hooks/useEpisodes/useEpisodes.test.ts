import { renderHook } from "@testing-library/react";
import { apiPaths } from "../../constants/paths/paths";
import useEpisodes from "./useEpisodes";
import { wrapWithProviders } from "../../testUtils/renderWithProviders";
import {
  episodeDataApiMock,
  initialEpisodeDataMock,
  newEpisodeDataMock,
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
    test("Then it should return undefined", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getEpisodes },
        },
      } = renderHook(() => useEpisodes(), { wrapper: wrapWithProviders });

      const episodes = await getEpisodes(apiPaths.episode);

      expect(episodes).toBeUndefined();
    });
  });
});

describe("Given loadEpisodes function", () => {
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

describe("Given getEpisodeById function", () => {
  const expectedEpisodeData = episodeDataApiMock;
  const episodeId = expectedEpisodeData.id;
  const episodeUrl = `${apiPaths.episode}/${episodeId}`;

  describe(`When its invoked and receives the ${episodeUrl} url`, () => {
    test("When its receives a new episode data", async () => {
      const {
        result: {
          current: { getEpisodeById },
        },
      } = renderHook(() => useEpisodes(), { wrapper: wrapWithProviders });

      const episodeData = await getEpisodeById(episodeUrl);

      expect(episodeData).toStrictEqual(newEpisodeDataMock);
    });
  });

  describe(`When its invoked and receives the ${episodeUrl} url but there is an error`, () => {
    test("When its receives undefined", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getEpisodeById },
        },
      } = renderHook(() => useEpisodes(), { wrapper: wrapWithProviders });

      const episodeData = await getEpisodeById(episodeUrl);

      expect(episodeData).toBeUndefined();
    });
    1;
  });
});
