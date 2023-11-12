import { NavLink } from "react-router-dom";
import { partialsPaths } from "../../constants/paths/paths";
import NavegationMenuStyled from "./NavegationMenuStyled";

const NavegationMenu = (): React.ReactElement => {
  return (
    <NavegationMenuStyled className="navBar">
      <ul className="navBar__links">
        <li>
          <NavLink to={`${partialsPaths.character}`} end>
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink to={`${partialsPaths.episode}`} end>
            Episodes
          </NavLink>
        </li>
      </ul>
    </NavegationMenuStyled>
  );
};

export default NavegationMenu;
