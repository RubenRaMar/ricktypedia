import { Outlet } from "react-router-dom";
import MainHeader from "../MainHeader/MainHeader";
import ContainerStyled from "../../styles/shared/ContainerStyled";
import Loading from "../Loading/Loading";
import { useAppSelector } from "../../store";

const Layout = (): React.ReactElement => {
  const { isLoading } = useAppSelector(({ ui }) => ui);

  return (
    <>
      {isLoading && <Loading />}
      <MainHeader />
      <ContainerStyled>
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;
