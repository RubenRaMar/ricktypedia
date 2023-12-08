import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Button from "./Button";

describe("Given a Button component", () => {
  const expectedTextButton = "Show More";
  const actionOnClick = vi.fn();

  describe("When it rendered and receives a 'Show More' text", () => {
    test("Then it should show the text 'Show More'", () => {
      renderWithProviders({
        ui: (
          <Button
            isDisabled={true}
            actionOnClick={actionOnClick}
            text={expectedTextButton}
          />
        ),
      });

      const showMoreButton = screen.getByRole("button", {
        name: expectedTextButton,
      });

      expect(showMoreButton).toBeInTheDocument();
    });
  });

  describe("When it rendered and receives the user click", () => {
    test("Then it should invoked the actonOnClick function", async () => {
      renderWithProviders({
        ui: (
          <Button
            isDisabled={false}
            actionOnClick={actionOnClick}
            text={expectedTextButton}
            modifiers={["small", "medium", "medium-expanded"]}
          />
        ),
      });

      const showMoreButton = screen.getByRole("button", {
        name: expectedTextButton,
      });

      await userEvent.click(showMoreButton);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
