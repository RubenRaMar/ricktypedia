import { useEffect, useCallback } from "react";
import EpisodesPageStyled from "./EpisodesPageStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import useEpisodes from "../../hooks/useEpisodes/useEpisodes";
import { apiPaths, partialsPaths } from "../../constants/paths/paths";
import EpisodesList from "../../components/EpisodesList/EpisodesList";
import FormSearch from "../../components/FormSearch/FormSearch";
import useItems from "../../hooks/useItems/useItems";

const EpisodesPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { handleItemsRealTimeSearch } = useItems();
  const { loadEpisodes } = useEpisodes();
  const {
    episode: { episodes },
    ui: { isLoading },
  } = useAppSelector((state) => state);

  useEffect(() => {
    (async () => {
      loadEpisodes(partialsPaths.episode);
    })();
  }, [dispatch, loadEpisodes]);

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
    </EpisodesPageStyled>
  );
};

export default EpisodesPage;
