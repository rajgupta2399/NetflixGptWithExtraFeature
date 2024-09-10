import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import tvShowsReducer from "./tvShowsSlice";
import watchLaterReducer from "./watchLaterSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    shows: tvShowsReducer,
    watchLater: watchLaterReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default store;
