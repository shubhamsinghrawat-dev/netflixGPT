import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    trailerVideo: null,
    nowPlayingMovies: null,
    TopTenMovies: null,
    UpcomingMovies: null,
    TvSeries: null,
  },
  reducers: {
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTopTenMovies: (state, action) => {
      state.TopTenMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
    addTvSeries: (state, action) => {
      state.TvSeries = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addTopTenMovies, addUpcomingMovies, addTvSeries} = moviesSlice.actions;

export default moviesSlice.reducer;