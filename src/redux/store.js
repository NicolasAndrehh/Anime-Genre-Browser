import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import animeGenresSlice from './animeGenres/animeGenresSlice';
import genreDetailsSlice from './genreDetails/genreDetailsSlice';

const store = configureStore({
  reducer: {
    animeGenres: animeGenresSlice,
    genreDetails: genreDetailsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
