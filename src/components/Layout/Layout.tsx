import { Outlet } from "react-router-dom";
import MainHeader from "../MainHeader/MainHeader";
import ContainerStyled from "../../styles/shared/ContainerStyled";
import Loading from "../Loading/Loading";

const Layout = (): React.ReactElement => {
  return (
    <>
      <Loading />
      <MainHeader />
      <ContainerStyled>
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;
