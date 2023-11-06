import { UiStructure } from "../../data/ui/types";

export const initialUiStateMock: UiStructure = {
  isLoading: false,
};

export const isLoadingTrueMock = { ...initialUiStateMock, isLoading: true };
