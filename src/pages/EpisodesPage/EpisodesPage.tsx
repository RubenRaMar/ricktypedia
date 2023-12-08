import { useEffect, useCallback, useState } from "react";
import EpisodesPageStyled from "./EpisodesPageStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import useEpisodes from "../../hooks/useEpisodes/useEpisodes";
import { apiPaths } from "../../constants/paths/paths";
import EpisodesList from "../../components/EpisodesList/EpisodesList";
import FormFilter from "../../components/FormFilter/FormFilter";
import useItems from "../../hooks/useItems/useItems";
import Button from "../../components/Button/Button";
import {
  clearEpisodesActionCreator,
  loadEpisodesActionCreator,
  showMoreEpisodesActionCreator,
} from "../../store/episodes/episodeSlice";

const EpisodesPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { handleItemsRealTimeSearch } = useItems();
  const { loadEpisodes, getEpisodes } = useEpisodes();
  const {
    episode: {
      episodes,
      info: { next: nextPage },
    },
    ui: { isLoading },
  } = useAppSelector((state) => state);
  const [newQuery, setNewQuery] = useState({ query: "", season: "" });
  const { query, season } = newQuery;

  useEffect(() => {
    (async () => {
      loadEpisodes(apiPaths.episode);
    })();
  }, [dispatch, loadEpisodes]);

  const handleShowMoreEpisodes = async () => {
    if (nextPage) {
      const episodes = await getEpisodes(nextPage);

      if (episodes) {
        dispatch(showMoreEpisodesActionCreator(episodes));
      }
    }
  };

  const handleSearchEpisodes = useCallback(
    (query: string) => {
      setNewQuery((newQuery) => ({ ...newQuery, query }));

      handleItemsRealTimeSearch({
        query: query,
        loadItems: loadEpisodes,
        url: apiPaths.episode,
        episode: season,
      });
    },
    [handleItemsRealTimeSearch, loadEpisodes, season]
  );

  const handleSeasonFilter = async (season: string) => {
    setNewQuery((newQuery) => ({ ...newQuery, season }));

    const episodes = await getEpisodes(
      `${apiPaths.episode}?episode=${season}&&name=${query}`
    );

    if (!episodes) {
      dispatch(clearEpisodesActionCreator());
      return;
    }

    dispatch(loadEpisodesActionCreator(episodes));
  };

  return (
    <EpisodesPageStyled>
      <h1>Episodes</h1>
      <FormFilter
        placeholder="Pilot, Lawnmower Dog..."
        onSearchChange={handleSearchEpisodes}
        onFilterChange={handleSeasonFilter}
      />
      {!episodes.length && !isLoading && (
        <h3 className="search-feedback">
          No episodes matching your search were found
        </h3>
      )}
      <EpisodesList />
      {episodes.length > 0 && (
        <Button
          text="Show More"
          actionOnClick={handleShowMoreEpisodes}
          isDisabled={nextPage === null}
        />
      )}
    </EpisodesPageStyled>
  );
};

export default EpisodesPage;
