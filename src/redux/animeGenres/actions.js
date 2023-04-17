import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.jikan.moe/v4/genres/anime';

const getGenres = createAsyncThunk('animeGenres/getGenres', async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return error;
  }
});

export default getGenres;
