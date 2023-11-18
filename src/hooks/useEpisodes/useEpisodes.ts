import axios from "axios";
import {
  EpisodesApiStructure,
  NewEpisodesStateStructure,
} from "../../data/episodes/types";
import { useCallback } from "react";
import { useAppDispatch } from "../../store";
import {
  showLoadingActionCreator,
  hideLoadingActionCreator,
} from "../../store/ui/uiSlice";
import { loadEpisodesActionCreator } from "../../store/episodes/episodeSlice";
import { initialEpisodesState } from "../../data/episodes/episodes";

const useEpisodes = () => {
  const dispatch = useAppDispatch();

  const getEpisodes = useCallback(
    async (url: string): Promise<NewEpisodesStateStructure | undefined> => {
      try {
        dispatch(showLoadingActionCreator());

        const { data: episodesApi } = await axios.get<
          Promise<EpisodesApiStructure>
        >(url);

        const newEpisodes: NewEpisodesStateStructure = {
          episodes: (await episodesApi).results.map((episodeApiData) => ({
            id: episodeApiData.id,
            name: episodeApiData.name,
            episode: episodeApiData.episode.toLowerCase(),
            airDate: episodeApiData.air_date,
            characters: episodeApiData.characters,
            url: episodeApiData.url,
            created: episodeApiData.created,
          })),
          info: (await episodesApi).info,
        };

        dispatch(hideLoadingActionCreator());

        return newEpisodes;
      } catch (error) {
        dispatch(hideLoadingActionCreator());
      }
    },
    [dispatch]
  );

  const loadEpisodes = useCallback(
    async (url: string) => {
      const episodes = await getEpisodes(url);

      if (url.includes("?name=") && !episodes) {
        dispatch(loadEpisodesActionCreator(initialEpisodesState));

        return;
      }

      if (!episodes) {
        return;
      }

      dispatch(loadEpisodesActionCreator(episodes));
    },
    [dispatch, getEpisodes]
  );

  return { getEpisodes, loadEpisodes };
};

export default useEpisodes;
