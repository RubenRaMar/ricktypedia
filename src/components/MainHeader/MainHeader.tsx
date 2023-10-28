import NavegationMenu from "../NavegationMenu/NavegationMenu";
import MainHeaderStled from "./MainHeaderStyled";

const MainHeader = (): React.ReactElement => {
  return (
    <MainHeaderStled>
      <img
        src="/images/logo.webp"
        alt="Logo of the animated series Rick and Morty"
        width="200"
        height="77"
      />
      <NavegationMenu />
    </MainHeaderStled>
  );
};

export default MainHeader;
