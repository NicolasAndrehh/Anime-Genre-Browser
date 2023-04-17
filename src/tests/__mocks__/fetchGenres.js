const fetchGenres = () => {
  const genres = {
    data: [
      {
        mal_id: 1,
        name: 'Action',
        url: 'https://myanimelist.net/anime/genre/1/Action',
        count: 4604,
      },
      {
        mal_id: 2,
        name: 'Adventure',
        url: 'https://myanimelist.net/anime/genre/2/Adventure',
        count: 3790,
      },
      {
        mal_id: 5,
        name: 'Avant Garde',
        url: 'https://myanimelist.net/anime/genre/5/Avant_Garde',
        count: 731,
      },
      {
        mal_id: 46,
        name: 'Award Winning',
        url: 'https://myanimelist.net/anime/genre/46/Award_Winning',
        count: 234,
      },
      {
        mal_id: 26,
        name: 'Girls Love',
        url: 'https://myanimelist.net/anime/genre/26/Girls_Love',
        count: 109,
      },
    ],
  };
  return genres.data;
};

export default fetchGenres;
