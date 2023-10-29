import { createSlice } from "@reduxjs/toolkit";
import { initialUiState } from "../../data/ui/ui";

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentUiState) => ({
      ...currentUiState,
      isLoading: true,
    }),

    hideLoading: (currentUiState) => ({
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
