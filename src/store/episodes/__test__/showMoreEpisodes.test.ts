import { EpisodesStateStructure } from "../../../data/episodes/types";
import {
  currentEpisodeStateMock,
  newEpisodesStateMock,
} from "../../../mocks/episodesMocks/episodesMocks";
import { episodeReducer, showMoreEpisodesActionCreator } from "../episodeSlice";

describe("Given a showMoreEpisodes mini reducer", () => {
  describe("When its invoked with a new list of 3 episodes and it already contains another 3", () => {
    const expectedEpisodesStateMock: EpisodesStateStructure = {
      ...currentEpisodeStateMock,
      episodes: [
        ...currentEpisodeStateMock.episodes,
        ...newEpisodesStateMock.episodes,
      ],
      info: currentEpisodeStateMock.info,
    };

    test("Then it returns a new episodes list with the old episodes plus the new episodes", () => {
      const showMoreEpisodes = episodeReducer(
        currentEpisodeStateMock,
        showMoreEpisodesActionCreator(newEpisodesStateMock)
      );

      expect(showMoreEpisodes).toStrictEqual(expectedEpisodesStateMock);
    });

    test("And with a total of 6 episodes", () => {
      const expetedEpisodesLength = 6;

      const showMoreEpisodes = episodeReducer(
        currentEpisodeStateMock,
        showMoreEpisodesActionCreator(newEpisodesStateMock)
      );

      expect(showMoreEpisodes.episodes.length).toStrictEqual(
        expetedEpisodesLength
      );
    });

    test("And the info should be replaced by the new one", () => {
      const showMoreEpisodes = episodeReducer(
        currentEpisodeStateMock,
        showMoreEpisodesActionCreator(newEpisodesStateMock)
      );

      expect(showMoreEpisodes.info).toStrictEqual(newEpisodesStateMock.info);
    });
  });
});
