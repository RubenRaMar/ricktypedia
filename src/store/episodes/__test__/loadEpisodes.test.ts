import {
  currentEpisodeStateMock,
  newEpisodesStateMock,
} from "../../../mocks/episodesMocks/episodesMocks";
import { episodeReducer, loadEpisodesActionCreator } from "../episodeSlice";

describe("Given a loadEpisodes mini reducer", () => {
  describe("When its invoked and receives a list of episodes and their info", () => {
    test("Then it should return a new list of episodes, their information and the current episode data", () => {
      const actionLoadEpisodes =
        loadEpisodesActionCreator(newEpisodesStateMock);

      const newEpisodeState = episodeReducer(
        currentEpisodeStateMock,
        actionLoadEpisodes
      );

      expect(newEpisodeState).toContain(newEpisodesStateMock);
    });
  });
});
