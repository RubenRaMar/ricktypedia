import EpisodeCardStyled from "./EpisodeCardStyled";
import { EpisodeDataStructure } from "../../data/episodes/types";
import { Link } from "react-router-dom";
import { itemsPaths } from "../../constants/paths/paths";

interface EpisodeCardProps {
  episode: EpisodeDataStructure;
  position: number;
}

const EpisodeCard = ({
  episode: { airDate, episode, name, id },
  position,
}: EpisodeCardProps): React.ReactElement => {
  return (
    <EpisodeCardStyled className="episode">
      <Link to={`${itemsPaths.episodeDetails}/${id}`}>
        <h2 className="episode__title">{name}</h2>
        <img
          className="episode__image"
          src={`/images/episodes/${episode}.webp`}
          alt={`Episode ${name}`}
          width="600"
          height="388"
          loading={position ? "lazy" : "eager"}
        />
        <div className="episode__data-container">
          <div className="episode__container">
            <div className="episode__data">
              <span>{`Season ${episode.slice(1, 3)}`}</span>
              <span>{`Episode ${episode.slice(4, 6)}`}</span>
            </div>
          </div>
          <div className="episode__container">
            <span className="episode__data">{airDate}</span>
          </div>
        </div>
      </Link>
    </EpisodeCardStyled>
  );
};

export default EpisodeCard;
