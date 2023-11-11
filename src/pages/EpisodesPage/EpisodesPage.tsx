import { useEffect } from "react";
import EpisodesPageStyled from "./EpisodesPageStyled";
import { useAppDispatch } from "../../store";
import useEpisodes from "../../hooks/useEpisodes/useEpisodes";
import { apiPaths } from "../../constants/paths/paths";
import { loadEpisodesActionCreator } from "../../store/episodes/episodeSlice";

const EpisodesPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getEpisodes } = useEpisodes();

  useEffect(() => {
    (async () => {
      const episodes = await getEpisodes(apiPaths.episode);

      if (!episodes) {
        return;
      }

      dispatch(loadEpisodesActionCreator(episodes));
    })();
  }, [dispatch, getEpisodes]);

  return (
    <EpisodesPageStyled>
      <h1>Episodes</h1>
    </EpisodesPageStyled>
  );
};

export default EpisodesPage;
