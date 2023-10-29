import { initialUiStateMock, isLoadingTrueMock } from "../../mocks/ui/ui";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a showLoading mini reducer", () => {
  describe("When its invoked", () => {
    test("Then it should change the isLoading state to true", () => {
      const isLoading = uiReducer(
        initialUiStateMock,
        showLoadingActionCreator()
      );

      expect(isLoading).toStrictEqual(isLoadingTrueMock);
    });
  });
});

describe("Given a hideLoading mini reducer", () => {
  describe("When its invoked", () => {
    test("Then it should change the isLoading property to false", () => {
      const isLoading = uiReducer(
        isLoadingTrueMock,
        hideLoadingActionCreator()
      );

      expect(isLoading).toStrictEqual(initialUiStateMock);
    });
  });
});
