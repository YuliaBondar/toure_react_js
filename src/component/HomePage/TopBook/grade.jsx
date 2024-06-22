import React, { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import './TopBook.css';

const Grade = ({ id }) => {
  const initialState = JSON.parse(localStorage.getItem(`selected-${id}`)) || false;
  const [selected, setSelected] = useState(initialState);//установка начального состояния

  useEffect(() => {
    localStorage.setItem(`selected-${id}`, JSON.stringify(selected));
  }, [selected, id]);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div className="grade">
      <div className="star_one" onClick={handleClick}>
        <FaStar className={selected ? 'star selected' : 'star'} />
        <div className="star_grade"></div>
      </div>
    </div>
  );
};

export default Grade;
