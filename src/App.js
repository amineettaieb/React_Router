import "./App.css";
import MovieList from "./Components/MovieList";
import {ListMovies} from "./data/movies_data";
import Filter from "./Components/Filter";
import { useState } from "react";
import AddMovie from "./Components/AddMovie";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Trailler from "./Pages/Trailler";

function App() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [allMovies, setMovies] = useState(() => {
    return ListMovies;
  });

  const movies = allMovies.map((m, key) => ({ ...m, key })).filter(m => m.title.toLowerCase().includes(title.toLowerCase()) && (!rating || +m.rating === rating))

  return (

    <div className="App">

      <Filter {...{ rating, setRating, setTitle, title, setMovies }} />
           <Routes>
        <Route
          path="/"
          element={
            <Home
              movies={movies}
            />
          }
        />
        
        <Route path="/movies" element={<MovieList movies={movies} />} />

        <Route
          path="add"
          element={
            <>
             
              <AddMovie
                submit={(r) => setMovies([...movies, r])}
              />
            </>
          }
        />
        <Route
          path="*"
          element={
            <div>
              Not Found <Link to="/">Home</Link>
            </div>
          }
        />
        <Route path="/trailler/:id" element={<Trailler movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
