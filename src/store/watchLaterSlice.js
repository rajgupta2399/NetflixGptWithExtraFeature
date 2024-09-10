import { createSlice } from "@reduxjs/toolkit";

const watchLater = createSlice({
  name: "watchLater",
  initialState: {
    item: JSON.parse(localStorage.getItem("watchLaterData")) || [],
  },
  reducers: {
    addWatchToLater: (state, action) => {
      const movie = action.payload;

      // Check if the movie is already in the watchLater list
      const isAlreadyInWatchLater = state.item.some(
        (item) => item.id === movie.id
      );

      // Only add the movie if it is not already in the list
      if (!isAlreadyInWatchLater) {
        state.item = [...state.item, movie];
        localStorage.setItem("watchLaterData", JSON.stringify(state.item));
      }
    },
    removeWatchLater: (state, action) => {
      state.item = state.item.filter((movie) => movie.id !== action.payload);
      localStorage.setItem("watchLaterData", JSON.stringify(state.item));
    },
  },
});

export const { addWatchToLater, removeWatchLater } = watchLater.actions;

export default watchLater.reducer;
