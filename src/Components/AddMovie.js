import { Button } from "bootstrap";
import React, { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

const AddMovie = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const handleAdd = () => {
    const newMovie = {
      id: Math.floor(Math.random() * 1000),
      title,
      posterURL,
      description,
      rating: +rating,
    };
    props.add(newMovie);
    setTitle("");
    setPosterURL("");
    setDescription("");
    setRating("");
    closeModal();
  };

  return (
    <div>
      <button
        style={{ margin: "2rem", border: "solid 1px black", padding: "5px" }}
        onClick={openModal}
      >
        add movie
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h1 style={{ color: "blue" }}>Add Movie</h1>
        <form
          style={{
            backgroundColor: "white",
            margin: "8px",
            border: "solid 1px black",
          }}
        >
          <h5 style={{ color: "black" }}>Title:</h5>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <h5 style={{ color: "black" }}>PosterURL:</h5>
          <input
            type="url"
            name="posterURL"
            value={posterURL}
            onChange={(e) => setPosterURL(e.target.value)}
            style={{ color: "#556B2F", border: "solid 1px #556B2F" }}
          />
          <h5 style={{ color: "black" }}>Description:</h5>
          <textarea
            name="description"
            cols="30"
            rows="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ color: "#556B2F", border: "solid 1px #556B2F" }}
          ></textarea>
          <h5 style={{ color: "black" }}>Rating:</h5>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            style={{ color: "#556B2F", border: "solid 1px #556B2F" }}
          />
        </form>
        <button
          style={{
            color: "blue",
            margin: "7px",
            border: "solid 1px blue",
            padding: "1rem",
          }}
          onClick={handleAdd}
        >
          add
        </button>
        <button
          style={{
            color: "blue",
            margin: "7px",
            padding: "1rem",
            border: "solid 1px blue",
          }}
          onClick={closeModal}
        >
          close
        </button>
      </Modal>
    </div>
  );
};

export default AddMovie;
