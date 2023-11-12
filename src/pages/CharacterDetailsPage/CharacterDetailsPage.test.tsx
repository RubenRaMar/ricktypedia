import { fireEvent, screen } from "@testing-library/react";
import {
  characterMock,
  currentCharactersStateMock,
} from "../../mocks/charactersMocks/charactersMocks";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import CharacterDetailsPage from "./CharacterDetailsPage";

describe("Given a CharacterDetailsPage page", () => {
  describe("When its rendered", () => {
    const {
      created,
      gender,
      location: { name: locationName },
      name,
      origin: { name: originName },
      species,
      status,
      type,
    } = characterMock;

    test(`Then it should show the image of the 'character ${name}'`, () => {
      const altText = `character ${name}`;

      renderWithProviders({
        ui: <CharacterDetailsPage />,
        preloadedState: { character: currentCharactersStateMock },
      });

      const characterImage = screen.getByAltText(altText);

      expect(characterImage).toBeInTheDocument();
    });

    test(`And a heading with the text ${name}`, () => {
      const characterName = name;

      renderWithProviders({
        ui: <CharacterDetailsPage />,
        preloadedState: { character: currentCharactersStateMock },
      });

      const nameHeading = screen.getByRole("heading", { name: characterName });

      expect(nameHeading).toBeInTheDocument();
    });

    test(`And various data about the character`, () => {
      const characterDataList = [
        "Gender",
        "Status",
        "Location",
        "Species",
        "Type",
        "Created",
        "Origin",
        gender,
        status,
        locationName,
        species,
        type,
        created.substring(0, 10),
        originName,
      ];

      renderWithProviders({
        ui: <CharacterDetailsPage />,
        preloadedState: { character: currentCharactersStateMock },
      });

      characterDataList.forEach((characterData) => {
        const nameHeading = screen.getByText(characterData);

        expect(nameHeading).toBeInTheDocument();
      });
    });
  });

  describe("When its rendered but not finding the character image ", () => {
    test("Then it should show a image with the 'Silhouette of Riky and Morty representing that the image has not been found'", () => {
      const altText = /character/i;
      const errotAltText = `Silhouette of Riky and Morty representing that the image has not been found`;

      renderWithProviders({
        ui: <CharacterDetailsPage />,
      });

      const image = screen.getByAltText(altText);

      fireEvent.error(image);

      const errorImage = screen.getByAltText(errotAltText);

      expect(errorImage).toBeInTheDocument();
    });
  });
});
