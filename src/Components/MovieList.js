import React from "react";
import MovieCard from "./MovieCard";
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
  
  const { list: listClass } = useStyles();
  return (
    <div
      className={listClass} >
      {movies.map((m,i) => (
          <MovieCard movie={m} key={i} />
        ))}
    </div>
  );
};

export default MovieList;
