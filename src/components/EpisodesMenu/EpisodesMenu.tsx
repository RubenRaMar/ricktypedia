import { useState } from "react";
import { Link } from "react-router-dom";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import EpisodesMenuStyled from "./EpisodesMenuStyled";

interface EpisodesMenuProps {
  episodes: string[];
}

const EpisodesMenu = ({ episodes }: EpisodesMenuProps): React.ReactElement => {
  const [isVisible, setIsVisible] = useState(false);

  const toogleVisibilityEpisode = () => {
    setIsVisible((isVisible) => !isVisible);
  };

  return (
    <EpisodesMenuStyled className="episodes">
      <Button
        text="Episodes"
        actionOnClick={toogleVisibilityEpisode}
        icon={faCaretDown}
        modifier={isVisible ? ["medium", "medium-expanded"] : ["medium"]}
      />

      <ul
        className={`episodes__episodes-list ${
          isVisible ? "episodes__episodes-list--visible" : ""
        }`}
      >
        {episodes.map((episode) => (
          <li key={episode.split("/").pop()}>
            <Link
              aria-expanded={isVisible}
              className="episodes__episode"
              to={episode}
            >
              {`Episode ${episode.split("/").pop()}`}
            </Link>
          </li>
        ))}
      </ul>
    </EpisodesMenuStyled>
  );
};

export default EpisodesMenu;
