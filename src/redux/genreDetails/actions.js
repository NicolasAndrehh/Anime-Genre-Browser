import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.jikan.moe/v4/anime?genres=';

const getGenreDetails = createAsyncThunk('genreDetails/getGenreDetails', async (genreId) => {
  try {
    const response = await axios.get(URL + genreId);
    return response.data;
  } catch (error) {
    return error;
  }
});

export default getGenreDetails;
