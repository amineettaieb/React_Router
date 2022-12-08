import React from "react";
import "../App.css";
import { useStyles } from "./MovieCard.styles.js";
import { useState } from "react";
import Rate from "./Rate";
import { Link } from "react-router-dom";





const MovieCard = ({movie, submit}) => {
  const {
    card,
    button,
    header,
    desc: descStyles,
    urlInput: urlInputStyles,
    img: imgStyles,
  } = useStyles();
  const [description, setDescription] = useState(movie.description ?? "");
  const [rating, setRating] = useState(movie.rating ?? 0);
  const [url, setUrl] = useState(movie.posterURL ?? "");
  const [title, setTitle] = useState(movie.title ?? "");


  return (
    <div className="Card">
      <div className="card-left">
        <img src={url} alt="logo"/>
      </div>
      <div className="card-right">
        <div className="card-rating">
          <Rate rating={rating} />
        </div>
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="card-description">
          <p>{description}</p>
        </div>
        <div className="btn" style={{ }}>
          <Link to={`/trailler/${movie.id}`}>show trailler</Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
