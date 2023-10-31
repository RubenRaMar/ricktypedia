import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled className="loading">
      <img
        className="loading__image"
        src="/images/portal.webp"
        alt="Rick and Morty going through a portal"
        width="300"
        height="293"
      />
      <span>Loading...</span>
    </LoadingStyled>
  );
};

export default Loading;
