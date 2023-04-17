import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import AnimeGenres from './components/animeGenres';
import GenreDetails from './components/genreDetails';
import Header from './components/header';

function App() {
  const { genreId } = useSelector((state) => state.genreDetails);

  return (
    <div className="App">
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={<AnimeGenres />} />
          <Route path="/details" element={<GenreDetails genreId={genreId} />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
