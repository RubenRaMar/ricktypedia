import EpisodeCardStyled from "./EpisodeCardStyled";
import { EpisodeDataStateStructure } from "../../data/episodes/types";

interface EpisodeCardProps {
  character: EpisodeDataStateStructure;
  position: number;
}

const EpisodeCard = ({
  character: { airDate, episode, name },
  position,
}: EpisodeCardProps): React.ReactElement => {
  return (
    <EpisodeCardStyled className="episode">
      <h2 className="episode__title">{name}</h2>
      <img
        className="episode__image"
        src={`/images/episodes/${episode}.webp`}
        alt={`Episode ${name}`}
        width="600"
        height="388"
        loading={position ? "lazy" : "eager"}
      />
      <div className="episode__data">
        <span className="episode__name">Episode</span>
        <div className="episode__seasion-container">
          <span className="episode__seasion">
            {`Seasion: ${episode.slice(1, 3)}`}
          </span>
          <span className="episode__number">
            {`Episode: ${episode.slice(4, 6)}`}
          </span>
        </div>
      </div>
      <div className="episode__air-container">
        <span className="episode__air-title">Air Data:</span>
        <span className="episode__air-data">{airDate}</span>
      </div>
    </EpisodeCardStyled>
  );
};

export default EpisodeCard;
