import { EpisodeDataStateStructure } from "../../../data/episodes/types";
import {
  currentEpisodeStateMock,
  initialEpisodeDataMock,
} from "../../../mocks/episodesMocks/episodesMocks";
import { episodeReducer, clearEpisodesActionCreator } from "../episodeSlice";

describe("Given a clearEpisodes mini reducer", () => {
  describe("When its invoked", () => {
    test("Then it should return a new state with the reseted episodeData", () => {
      const actionclearEpisodes = clearEpisodesActionCreator();
      const resetedEpisodesData: EpisodeDataStateStructure =
        initialEpisodeDataMock;

      const { episodeData } = episodeReducer(
        currentEpisodeStateMock,
        actionclearEpisodes
      );

      expect(episodeData).toStrictEqual(resetedEpisodesData);
    });
  });
});
