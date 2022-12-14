import React from "react";
// import Filter from "../Components/Filter";
import MovieCard from "../Components/MovieCard";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  list: {
    background: 'aliceblue',
    paddingTop: 50,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, 400px)',
    justifyContent: 'center'
  }
})

const Home = (props) => {
  const { list: listClass } = useStyles()
  const randoms = []
  for (let i = 0; i < 3; i++) {
    const x = Math.floor(Math.random() * props.movies.length)
    if (randoms.indexOf(x) === -1) {
      randoms.push(x)

    }
    }
  return (
    <div>
      <div className={listClass}>
        {randoms.map((i) => <MovieCard key={i} movie={props.movies[i]} />)}
      </div>
    </div>
  );
};
export default Home;
