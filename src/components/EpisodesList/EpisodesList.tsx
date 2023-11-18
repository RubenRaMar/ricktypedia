import { useAppSelector } from "../../store";
import ItemListStyled from "../../styles/shared/ItemListStyled";
import EpisodeCard from "../EpisodeCard/EpisodeCard";

const EpisodesList = (): React.ReactElement => {
  const episodes = useAppSelector((state) => state.episode.episodes);

  return (
    <ItemListStyled>
      {episodes.map((episode, position) => (
        <li key={episode.id}>
          <EpisodeCard position={position} episode={episode} />
        </li>
      ))}
    </ItemListStyled>
  );
};

export default EpisodesList;
