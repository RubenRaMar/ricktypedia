import { screen } from "@testing-library/react";
import { characterMock } from "../../mocks/charactersMocks/charactersMocks";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import CharacterCard from "./CharacterCard";

describe("Given a CharacterCard component", () => {
  describe("When its invoked", () => {
    const {
      name,
      location: { name: locationName },
      gender,
      status,
    } = characterMock;

    test("Then it should show four images that represent character data", () => {
      const expectedAltTexts = [
        `The status of the character, ${status}`,
        `Of the character ${name}`,
        `The gender of the personage, ${gender}`,
        "The location of the character",
      ];

      renderWithProviders({
        ui: <CharacterCard character={characterMock} position={0} />,
      });

      expectedAltTexts.forEach((expectedAltText) => {
        const image = screen.getByAltText(expectedAltText);

        expect(image).toBeInTheDocument();
      });
    });

    test(`And a heading with the text ${name}`, () => {
      renderWithProviders({
        ui: <CharacterCard character={characterMock} position={0} />,
      });

      const heading = screen.getByRole("heading", { name: name });

      expect(heading).toBeInTheDocument();
    });

    test(`And the text ${locationName}`, () => {
      renderWithProviders({
        ui: <CharacterCard character={characterMock} position={0} />,
      });

      const text = screen.getByText(locationName);

      expect(text).toBeInTheDocument();
    });
  });
});
