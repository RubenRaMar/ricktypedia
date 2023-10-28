import { Outlet } from "react-router-dom";
import MainHeader from "../MainHeader/MainHeader";
import ContainerStyled from "../../styles/shared/ContainerStyled";

const Layout = (): React.ReactElement => {
  return (
    <>
      <MainHeader />
      <ContainerStyled>
        <h1>Rick y Morty</h1>
      </ContainerStyled>
      <Outlet />
    </>
  );
};

export default Layout;
