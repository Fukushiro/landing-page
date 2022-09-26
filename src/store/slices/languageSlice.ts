import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LanguageState {
  currentLanguage: "pt" | "en";
}

const initialState: LanguageState = {
  currentLanguage: "pt",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<"pt" | "en">) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;

export const languageReducer = languageSlice.reducer;
