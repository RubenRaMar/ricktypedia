import { Link } from "react-router-dom";
import CharacterCardStyled from "./CharacterCardStyled";
import { characterPaths } from "../../constants/paths/paths";
import { CharacterStructure } from "../../data/characters/types";

interface CharacterCardProps {
  character: CharacterStructure;
  position: number;
}

const CharacterCard = ({
  character: {
    id,
    image,
    name,
    status,
    gender,
    location: { name: locationName },
  },
  position,
}: CharacterCardProps): React.ReactElement => {
  return (
    <CharacterCardStyled className="character">
      <Link to={`${characterPaths.characterDetails}/${id}`}>
        <img
          width="277"
          height="382"
          className="character__image"
          src={image}
          alt={`Of the character ${name}`}
          loading={position ? "lazy" : "eager"}
        />
        <h2 className="character__name">{name}</h2>
        <div className="character__data">
          <span className="character__location">
            <img
              className="character__location-image"
              src="/images/location.webp"
              alt="The location of the character"
              width="12"
              height="15"
            />
            {locationName}
          </span>
          <div className="character__images-container">
            <img
              src={`/images/${status.toLowerCase()}.webp`}
              alt={`The status of the character, ${status}`}
              width="30"
              height="30"
            />
            <img
              src={`/images/${gender.toLowerCase()}.webp`}
              alt={`The gender of the personage, ${gender}`}
              width="30"
              height="30"
            />
          </div>
        </div>
      </Link>
    </CharacterCardStyled>
  );
};

export default CharacterCard;
