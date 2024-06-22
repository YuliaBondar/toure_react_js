import React, { useState } from 'react'
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { top_book } from './new_topbook.js';
import './TopBook.css'
import Top from './Top'

const TopBook = () => {

  const [isHidden, setIsHidden ] = useState(true);
  const [showCount, setShowCount] = useState(8);

  const List = () =>{
    setIsHidden(!isHidden);
    setShowCount(isHidden ? top_book.length : 8); 
  }
  return (
    <div className='TopBook'>
    <div className="text_topbook">
      <h1>TOP BOOK NOW</h1>
    </div>
    <Top showCount={showCount} /> 
   
    <div className="button_open_all_places">
      <button className='but_show' onClick={List}>
        <span>{isHidden ? 'See all' : 'Hide'}</span>
        <span>{isHidden ? <FaLongArrowAltDown /> : <FaArrowUp /> }</span>
      </button>
    </div>
  </div>
  )
}

export default TopBook