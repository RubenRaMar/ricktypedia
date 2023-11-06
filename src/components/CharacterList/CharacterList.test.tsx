import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import CharacterList from "./CharacterList";
import { currentCharactersStateMock } from "../../mocks/charactersMocks/charactersMocks";

describe("Given a CharacterList component", () => {
  describe("When its invoked and there is a list of characters", () => {
    const expetedCharacterName = currentCharactersStateMock.results[0].name;

    test(`Then it should show a heading with a text ${expetedCharacterName}`, () => {
      renderWithProviders({
        ui: <CharacterList />,
        preloadedState: { character: currentCharactersStateMock },
      });

      const heading = screen.getByRole("heading", {
        name: expetedCharacterName,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
