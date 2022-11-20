import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import initialMovies from './data/movies.data'
import { useState } from 'react';
import { BrowserRouter, createBrowserRouter, Link, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import Filter from './components/Filter';
import MovieCard from './components/MovieCard';



function App() {
  const [movies, setMovies] = useState(() => {
    return initialMovies
  })

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Filter />} />
          <Route path='movies' element={<MovieList movies={movies} />} />
          <Route path='add' element={<>
            <Filter />
            <MovieCard key={movies.length} submit={r => setMovies([...movies, r])} />
          </>} />
          <Route path='*' element={<div>Not Found <Link to='/'>Home</Link></div>} />
        </Routes>
    </div>
  );
}

export default App;
