import { screen } from "@testing-library/react";
import { episodeDataMock } from "../../mocks/episodesMocks/episodesMocks";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import EpisodeCard from "./EpisodeCard";

describe("Given a EpisodeCard componenet", () => {
  const episodeName = episodeDataMock.name;

  describe(`When its rendered and receives the ${episodeName} episode`, () => {
    test(`Then it should show image of the 'Episode ${episodeName}'`, () => {
      const altText = `Episode ${episodeName}`;

      renderWithProviders({
        ui: <EpisodeCard episode={episodeDataMock} position={0} />,
      });

      const image = screen.getByAltText(altText);

      expect(image).toBeInTheDocument();
    });

    test(`And the ${episodeName} title in the heading`, () => {
      renderWithProviders({
        ui: <EpisodeCard episode={episodeDataMock} position={0} />,
      });

      const heading = screen.getByRole("heading", { name: episodeName });

      expect(heading).toBeInTheDocument();
    });

    test(`And the ${episodeName} title in the heading`, () => {
      const expectedTexts = [
        "Episode",
        "Air Data:",
        `Seasion: ${episodeDataMock.episode.slice(1, 3)}`,
        `Episode: ${episodeDataMock.episode.slice(4, 6)}`,
      ];

      renderWithProviders({
        ui: <EpisodeCard episode={episodeDataMock} position={1} />,
      });

      expectedTexts.forEach((expectedText) => {
        const texts = screen.getByText(expectedText);

        expect(texts).toBeInTheDocument();
      });
    });
  });
});
