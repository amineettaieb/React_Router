import React from "react";
import { useParams } from "react-router-dom";
const Trailler = (props) => {
  const { movies } = props;
  const { id } = useParams();

  const movie = movies.find((el) => el.id === +id);
  console.log(movie);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={movie.trailler}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Trailler;
