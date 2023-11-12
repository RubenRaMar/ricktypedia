import CharacterDetailsPageStyled from "./CharacterDetailsPageStyled";
import EpisodesMenu from "../../components/EpisodesMenu/EpisodesMenu";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect } from "react";
import useCharacter from "../../hooks/useCharacter/useCharacter";
import { apiPaths } from "../../constants/paths/paths";
import { loadCharacterByIdActionCreator } from "../../store/characters/charactersSlice";

const CharacterDetailsPage = (): React.ReactElement => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const characterData = useAppSelector(
    ({ character: { characterData } }) => characterData
  );
  const { getCharacterById } = useCharacter();

  useEffect(() => {
    (async () => {
      const character = await getCharacterById(`${apiPaths.character}/${id}`);

      if (character) {
        dispatch(loadCharacterByIdActionCreator(character));

        const preloadLink = document.createElement("link");
        preloadLink.rel = "preload";
        preloadLink.as = "image";
        preloadLink.href = character.image;

        const head = document.head;
        const firstChild = head.firstChild;
        head.insertBefore(preloadLink, firstChild);
      }
    })();
  }, [dispatch, getCharacterById, id]);

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
        height="300"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = "/images/backgroundDetail.webp";
          currentTarget.alt =
            "Silhouette of Riky and Morty representing that the image has not been found";
        }}
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
      <EpisodesMenu episodes={episodes} />
    </CharacterDetailsPageStyled>
  );
};

export default CharacterDetailsPage;
