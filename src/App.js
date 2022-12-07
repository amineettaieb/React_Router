import "./App.css";
import MovieList from "./Components/MovieList";
import initialMovies from './Data/movies.data'
import Filter from "./Components/Filter";
import { useState } from "react";
// import AddMovie from "./Components/AddMovie";
import { Routes, Route, Link } from "react-router-dom";
import MovieCard from "./Components/MovieCard";
import Home from "./Pages/Home";
import Trailler from "./Pages/Trailler";


function App() {

  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  // const filtrage = (text) => {};

  // const add = (newMovie) => {
  //   movies.push(newMovie);
  //   console.log(movies);
  //   console.log(newMovie);
  // }

  //   console.log(movies);
  //   console.log(newMovie);
  const [movies, setMovies] = useState(() => {
    return initialMovies
  });

  return (
    <div className="App">
      {/* <Routes> */}
      {/* <Route
          path="/"
          element={
            <Home
              text={text}
              setText={setText}
              rating={rating}
              setRating={setRating}
              movies={movies}
            />
          }*
        /> */}
      <Routes>
      <Route
          path="/"
          element={
            <Home
              text={text}
              setText={setText}
              rating={rating}
              setRating={setRating}
              movies={movies}
            />
          }
        />
        <Route path='/' element={<Filter />} />
        <Route path='Lmovies' element={<MovieList movies={movies} />} />

        <Route path='add' element={<>
            <Filter />
            <MovieCard key={movies.length} submit={r => setMovies([...movies, r])} />
          </>} />
        <Route path='*' element={<div>Not Found <Link to='/'>Home</Link></div>} />
        <Route path="/trailler/:id" element={<Trailler movies={movies} />} />
      </Routes>

      {/* </Routes> */}
      {/* <Filter
        text={text}
        setText={setText}
        rating={rating}
        setRating={setRating}
      />
      <MovieList
        movies={movies.filter(
          (movie, i) =>
            movie.title.toLowerCase().includes(text.toLowerCase()) &&
            movie.rating == rating
        )}
      /> */}
      {/* <AddMovie add={add} /> */}
    </div>
  );
}

export default App;
