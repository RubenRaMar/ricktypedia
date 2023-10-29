import { NavLink } from "react-router-dom";
import { partialsPaths } from "../../constants/paths/paths";
import NavegationMenuStyled from "./NavegationMenuStyled";

const NavegationMenu = (): React.ReactElement => {
  return (
    <NavegationMenuStyled>
      <ul>
        <NavLink to={`${partialsPaths.character}`}>Home</NavLink>
      </ul>
    </NavegationMenuStyled>
  );
};

export default NavegationMenu;
