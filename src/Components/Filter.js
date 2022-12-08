import React, { useState } from "react";
import { createUseStyles } from 'react-jss'
import Rate from "./Rate";
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineHome, AiOutlineAppstoreAdd, AiOutlineUnorderedList } from 'react-icons/ai'
import AddMovie from "./AddMovie";
import Modal from "react-modal";
Modal.setAppElement("#root");

const useStyles = createUseStyles({
  active: {},
  filter: {
    padding: [16, 0],
    display: 'flex',
    justifyContent: 'center',
    position: 'sticky',
    top: 0,
    left: 0,
    width: '100vw',
    right: 0,
    background: 'white',
    gap: 50,
    zIndex: 999,
    boxShadow: '0 0 7px #00000063',
    '& a': {
      color: '#333',
      width: 25,
      height: 25,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      '&:hover,&$active': {
        color: 'white',
        background: '#777',
      }
    }
  }

})

const Filter = ({ title, setTitle, rating, setRating, setMovies }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { filter, active } = useStyles()
  const openModal = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setModalIsOpen(true);
  }
  const closeModal = () => setModalIsOpen(false);
  const handleAdd = (r) => {
    setMovies(movies => [...movies, r])
    closeModal()
  }

  return (
    <>
    <div className={filter} onClick={() => setModalIsOpen(false)}>
      <NavLink to='/'><AiOutlineHome /></NavLink>
      <NavLink to='/movies' className={({ isActive }) => isActive ? active : ''}><AiOutlineUnorderedList /></NavLink>
      <NavLink to="/add" onClick={openModal} className={({ isActive }) => (isActive || modalIsOpen) ? active : ''}><AiOutlineAppstoreAdd /></NavLink>
      {setTitle && <>
        <input placeholder="Search Title ..." value={title} onChange={e => setTitle(e.target.value)} />
        <Rate rating={rating} setRating={e => e === rating ? setRating(0) : setRating(e)} />
      </>}
    </div>
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      <AddMovie
        closeModal={closeModal}
        submit={handleAdd}
      />
    </Modal>

  </>
  );
};
export default Filter;
