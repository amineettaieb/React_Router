import React from "react";
import "../App.css";
import { useStyles } from "./MovieCard.styles.js";
import { useState } from "react";
import Rate from "./Rate";
import { Link } from "react-router-dom";

// const MovieCard = ({
//   movie: { title, description, posterURL, rating, id },
// }) => {
//   return (
//     <div className="Card">
//       <div className="card-left">
//         <img src={posterURL} />
//       </div>
//       <div className="card-right">
//         <div className="card-rating">
//           <Rate rating={rating} />
//         </div>
//         <div className="title">
//           <h1>{title}</h1>
//         </div>
//         <div className="card-description">
//           <p>{description}</p>
//         </div>
//         <div className="btn">
//           <Link to={`/trailler/${id}`}>show trailler</Link>
//         </div>
//       </div>
//     </div>
//   );
// };
const MovieCard = ({movie}) => {
  // const { submit, posterURL, id } = props;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating) {
      alert("Please rate at least with 1 star");
      return;
    }
    handleSubmit({ posterURL: url, description, rating, title });
  };

  // return <form className={card} onSubmit={handleSubmit}>
  //     {!submit && <div className={imgStyles} style={{backgroundImage: `url(${url})`}}/>}
  //     <header className={header}>
  //         {submit ? <input required placeholder="Title" value={title}
  //         onChange={e => setTitle(e.target.value)} /> : <h1>{title}</h1>}
  //         <Rate size={24} readonly={!submit} ratingValue={rating} onClick={setRating} />
  //     </header>
  //     {!submit ? <div className={descStyles}>{description}</div>
  //      : <textarea required placeholder="Description ..."
  //      className={descStyles} onChange={e => setDescription(e.target.value)} value={description} />}
  //     {submit && <input required
  //     className={urlInputStyles} value={url}
  //     onChange={e => setUrl(e.target.value)}
  //     type='url' placeholder='https://url...' />}
  //     {submit && <button className={button}>Add</button>}
  // </form>
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
        <div className="btn">
          {/* <Link to={`/trailler/${id}`}>show trailler</Link> */}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
