import React from "react";
import MovieCard from "./MovieCard";
import { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  list: {
    background: "aliceblue",
    paddingTop: 50,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, 400px)",
    justifyContent: "center",
  },
});

const MovieList = ({ movies }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const { list: listClass } = useStyles();
  return (
    <div
      className={listClass}
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   justifyContent: "space-evenly",
      //   flexWrap: "wrap",
      // }}
    >
      {/* {movies.map((movies, i) => (
        <MovieCard key={i} movie={movies} />
      ))} */}
      {movies.map((m,i) => (
          <MovieCard movie={m} key={i} />
        ))}
    </div>
  );
};

export default MovieList;
