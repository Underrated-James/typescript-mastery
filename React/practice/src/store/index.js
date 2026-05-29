import { configureStore, createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showStats: true,
  },
  reducers: {
    toggleStats: (state) => {
      state.showStats = !state.showStats;
    },
  },
});

export const { toggleStats } = uiSlice.actions;

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});