/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getGenres from './actions';

const initialState = {
  genres: [],
  isLoading: false,
  errorMessage: '',
};

const animeGenresSlice = createSlice({
  name: 'animeGenres',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getGenres.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGenres.fulfilled, (state, action) => {
        state.isLoading = false;
        const { data } = action.payload;
        state.genres = data;
      })
      .addCase(getGenres.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default animeGenresSlice.reducer;
