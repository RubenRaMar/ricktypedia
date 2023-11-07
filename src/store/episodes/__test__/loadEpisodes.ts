import {
  currentEpisodeStateMock,
  newEpisodesStateMock,
} from "../../../mocks/episodesMocks/episodesMocks";
import { episodeReducer, loadEpisodesActionCreator } from "../episodeSlice";

describe("Given a loadEpisodes mini reducer", () => {
  describe("When its invoked and receives a list of episodes and their info", () => {
    test("then it should return a new list of episodes, their information and the current episode data", () => {
      const newEpisodeState = episodeReducer(
        currentEpisodeStateMock,
        loadEpisodesActionCreator(newEpisodesStateMock)
      );

      expect(newEpisodeState).toStrictEqual({
        ...currentEpisodeStateMock,
        ...newEpisodesStateMock,
      });
    });
  });
});
