import { UiStructure } from "../../types";

export const initialUiStateMock: UiStructure = {
  isLoading: false,
};

export const isLoadingTrueMock = { ...initialUiStateMock, isLoading: true };
