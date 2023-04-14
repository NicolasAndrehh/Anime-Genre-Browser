/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getGenreDetails from './actions';

const initialState = {
  animes: [],
  genreId: 0,
  isLoading: false,
  errorMessage: '',
};

const genreDetailsSlice = createSlice({
  name: 'genreDetails',
  initialState,
  reducers: {
    setGenreId: (state, action) => {
      state.genreId = action.payload;
    },
    clearSlice: (state) => {
      state.animes = [];
      state.isLoading = false;
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGenreDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGenreDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        const { data } = action.payload;
        state.animes = data;
      })
      .addCase(getGenreDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const { setGenreId, clearSlice } = genreDetailsSlice.actions;
export default genreDetailsSlice.reducer;
