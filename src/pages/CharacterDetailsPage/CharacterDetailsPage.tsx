import { CharacterStructure } from "../../types";
import CharacterDetailsPageStyled from "./CharacterDetailsPageStyled";
import Episodes from "../../components/Episodes/Episodes";

const CharacterDetailsPage = (): React.ReactElement => {
  const characterData: CharacterStructure = {
    id: 16,
    name: "Amish Cyborg",
    status: "Dead",
    species: "Alien",
    type: "Parasite",
    gender: "Male",
    origin: {
      name: "unknown",
      url: "",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/15"],
    url: "https://rickandmortyapi.com/api/character/16",
    created: "2017-11-04T21:12:45.235Z",
  };

  const {
    name,
    image,
    gender,
    location: { name: locationName },
    species,
    status,
    type,
    episode: episodes,
    created,
    origin: { name: originName },
  } = characterData;
  return (
    <CharacterDetailsPageStyled className="character">
      <h1>{name}</h1>
      <img
        className="character__image"
        src={image}
        alt={`character ${name}`}
        width="300"
        height="300px"
      />
      <div className="character__data">
        <span className="character__key">Gender</span>
        <span className="character__value">{gender}</span>
      </div>
      <div className="character__data">
        <span className="character__key">Status</span>
        <span className="character__value">{status}</span>
      </div>
      <div className="character__data">
        <span className="character__key">Location</span>
        <span className="character__value">{locationName}</span>
      </div>
      <div className="character__data">
        <span className="character__key">Species</span>
        <span className="character__value">{species}</span>
      </div>
      {type && (
        <div className="character__data">
          <span className="character__key">Type</span>
          <span className="character__value">{type}</span>
        </div>
      )}
      <div className="character__data">
        <span className="character__key">Created</span>
        <span className="character__value">{created.substring(0, 10)}</span>
      </div>
      <div className="character__data">
        <span className="character__key">Origin</span>
        <span className="character__value">{originName}</span>
      </div>
      <Episodes episodes={episodes} />
    </CharacterDetailsPageStyled>
  );
};

export default CharacterDetailsPage;
