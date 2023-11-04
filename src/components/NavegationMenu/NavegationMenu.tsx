import { NavLink } from "react-router-dom";
import { partialsPaths } from "../../constants/paths/paths";
import NavegationMenuStyled from "./NavegationMenuStyled";

const NavegationMenu = (): React.ReactElement => {
  return (
    <NavegationMenuStyled>
      <ul>
        <li>
          <NavLink to={`${partialsPaths.character}`} end>
            Home
          </NavLink>
        </li>
      </ul>
    </NavegationMenuStyled>
  );
};

export default NavegationMenu;
