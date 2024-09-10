import { createSlice } from "@reduxjs/toolkit";

const tvShowSlice = createSlice({
  name: "shows",
  initialState: {
    arrivingToday: null,
    onTheAir: null,
  },
  reducers: {
    addArrivingToday: (state, action) => {
      state.arrivingToday = action.payload;
    },
    addOnTheAir: (state, action) => {
      state.onTheAir = action.payload;
    },
  },
});
export const { addArrivingToday, addOnTheAir, addPopular, addTopRated } =
  tvShowSlice.actions;
export default tvShowSlice.reducer;
