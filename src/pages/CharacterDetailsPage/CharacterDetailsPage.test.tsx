import { screen } from "@testing-library/react";
import { arisaCyborgCharacterMock } from "../../mocks/characters/characters";
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
    } = arisaCyborgCharacterMock;

    test(`Then it should show the image of the 'character ${name}'`, () => {
      const altText = `character ${name}`;

      renderWithProviders({ ui: <CharacterDetailsPage /> });

      const characterImage = screen.getByAltText(altText);

      expect(characterImage).toBeInTheDocument();
    });

    test(`And a heading with the text ${name}`, () => {
      const characterName = name;

      renderWithProviders({ ui: <CharacterDetailsPage /> });

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

      renderWithProviders({ ui: <CharacterDetailsPage /> });

      characterDataList.forEach((characterData) => {
        const nameHeading = screen.getByText(characterData);

        expect(nameHeading).toBeInTheDocument();
      });
    });
  });
});
