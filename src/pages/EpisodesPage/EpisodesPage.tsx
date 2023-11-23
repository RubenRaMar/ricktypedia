import { useEffect, useCallback } from "react";
import EpisodesPageStyled from "./EpisodesPageStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import useEpisodes from "../../hooks/useEpisodes/useEpisodes";
import { apiPaths } from "../../constants/paths/paths";
import EpisodesList from "../../components/EpisodesList/EpisodesList";
import FormSearch from "../../components/FormSearch/FormSearch";
import useItems from "../../hooks/useItems/useItems";
import Button from "../../components/Button/Button";
import { showMoreEpisodesActionCreator } from "../../store/episodes/episodeSlice";

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
      handleItemsRealTimeSearch({
        query: query,
        loadItems: loadEpisodes,
        url: apiPaths.episode,
      });
    },
    [handleItemsRealTimeSearch, loadEpisodes]
  );

  return (
    <EpisodesPageStyled>
      <h1>Episodes</h1>
      <FormSearch
        placeholder="Pilot, Lawnmower Dog..."
        onSearchChange={handleSearchEpisodes}
      />
      {episodes.length <= 0 && !isLoading && (
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
