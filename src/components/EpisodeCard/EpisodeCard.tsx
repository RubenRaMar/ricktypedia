import EpisodeCardStyled from "./EpisodeCardStyled";
import { EpisodeDataStateStructure } from "../../data/episodes/types";

interface EpisodeCardProps {
  episode: EpisodeDataStateStructure;
  position: number;
}

const EpisodeCard = ({
  episode: { airDate, episode, name },
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
      <div className="episode__data-container">
        <div className="episode__container">
          <span className="episode__name">Episode</span>
          <div className="episode__data">
            <span>{`Seasion ${episode.slice(1, 3)}`}</span>
            <span>{`Episode ${episode.slice(4, 6)}`}</span>
          </div>
        </div>
        <div className="episode__container">
          <span className="episode__name">Air Data</span>
          <span className="episode__data">{airDate}</span>
        </div>
      </div>
    </EpisodeCardStyled>
  );
};

export default EpisodeCard;
