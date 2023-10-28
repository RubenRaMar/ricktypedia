import { NavLink } from "react-router-dom";
import routerPaths from "../../constants/routerPaths/routerPaths";
import NavegationMenuStyled from "./NavegationMenuStyled";

const NavegationMenu = (): React.ReactElement => {
  return (
    <NavegationMenuStyled>
      <ul>
        <NavLink to={`${routerPaths.base}`}>Home</NavLink>
      </ul>
    </NavegationMenuStyled>
  );
};

export default NavegationMenu;
