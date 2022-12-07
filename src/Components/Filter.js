import React, { useState } from "react";
import { createUseStyles } from 'react-jss'
import Rate from "./Rate";
import { Link } from 'react-router-dom'
import { AiOutlineHome, AiOutlineAppstoreAdd, AiOutlineUnorderedList } from 'react-icons/ai'

const useStyles = createUseStyles({
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
      '&:hover': {
        color: 'white',
        background: '#777',
      }
    }
  }

})

const Filter = (props,title) => {
  const handleChange = (e) => {
    // console.log(e.target.value);
    props.setText(e.target.value);
  };
  const { filter } = useStyles()
  return (
    <div className={filter}>
      <Link to='/'><AiOutlineHome /></Link>
      <Link to='/movies'><AiOutlineUnorderedList /></Link>
      <Link to='/add'><AiOutlineAppstoreAdd /></Link>
      {/* <input
        style={{ width: "100%", padding: "1rem", color: "blue" }}
        type="text"
        value={props.text}
        onChange={handleChange}
      /> */}
      {/* <Rate rating={props.rating} setRating={props.setRating} /> */}
      {props && <>
        <input placeholder="Search Title ..." value={title} value={props.text}
          onChange={e => props.setText(e.target.value)} />
        <Rate size={24} ratingValue={props.rating} onClick={e => e === props ? props.setRating(0) : props.setRating(e)} />

      </>}
    </div>
  );
};
export default Filter;
