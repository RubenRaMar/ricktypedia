import axios from "axios";
import {
  EpisodesApiStructure,
  NewEpisodesStateStructure,
} from "../../data/episodes/types";

const useEpisodes = () => {
  const getEpisodes = async (
    url: string
  ): Promise<NewEpisodesStateStructure> => {
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

    return newEpisodes;
  };

  return { getEpisodes };
};

export default useEpisodes;
