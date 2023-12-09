import { getIsUnknownOrEmpty } from "./helpers";

describe("Given a isUnknown function", () => {
  describe("When its invoked and receives the 'unknown'", () => {
    test("Then it should return 'falsy'", () => {
      const unknownText = "unknown";

      const isUnknownOrEmpty = getIsUnknownOrEmpty(unknownText);

      expect(isUnknownOrEmpty).toBeFalsy();
    });

    describe("When its invoked and receives the empty text", () => {
      test("Then it should return 'falsy'", () => {
        const emptyText = "";

        const isUnknownOrEmpty = getIsUnknownOrEmpty(emptyText);

        expect(isUnknownOrEmpty).toBeFalsy();
      });
    });

    describe("When its invoked and receives the text 'Morty'", () => {
      test("Then it should return truthy", () => {
        const text = "Morty";

        const isUnknownOrEmpty = getIsUnknownOrEmpty(text);

        expect(isUnknownOrEmpty).toBeTruthy();
      });
    });
  });
});
