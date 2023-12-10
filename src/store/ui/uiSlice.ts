import { createSlice } from "@reduxjs/toolkit";
import { initialUiState } from "../../data/ui/ui";
import { UiStructure } from "../../data/ui/types";

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentUiState): UiStructure => ({
      ...currentUiState,
      isLoading: true,
    }),

    hideLoading: (currentUiState): UiStructure => ({
      ...currentUiState,
      isLoading: false,
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
