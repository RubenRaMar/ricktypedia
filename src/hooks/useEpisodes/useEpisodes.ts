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

  return { getEpisodes };
};

export default useEpisodes;
