import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import Header from './components/Header';
import { useState } from 'react';
import Footer from './components/Footer';

export default function App() {
  const apiKey = '54db53fe';
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <Header />
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
      <Footer />
    </div>
  );
}
