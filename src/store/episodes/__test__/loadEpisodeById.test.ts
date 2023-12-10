import { expect } from "vitest";
import {
  currentEpisodeStateMock,
  newEpisodeDataMock,
} from "../../../mocks/episodesMocks/episodesMocks";
import { episodeReducer, loadEpisodeByIdActionCreator } from "../episodeSlice";
import { EpisodesStateStructure } from "../../../data/episodes/types";

describe("Given a loadEpisodeById mini reduced", () => {
  describe("When its receives a new episode date", () => {
    test("Then it should return a new state with the new episode data", () => {
      const expectedEpisodeState: EpisodesStateStructure = {
        ...currentEpisodeStateMock,
        episodeData: { ...newEpisodeDataMock },
      };
      const loadEpisodeByIdAction =
        loadEpisodeByIdActionCreator(newEpisodeDataMock);

      const newEpisodeState = episodeReducer(
        currentEpisodeStateMock,
        loadEpisodeByIdAction
      );

      expect(newEpisodeState).toStrictEqual(expectedEpisodeState);
    });
  });
});
