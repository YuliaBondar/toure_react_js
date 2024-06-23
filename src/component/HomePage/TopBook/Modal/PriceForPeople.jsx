import React, { useState } from 'react';
import { FaChildDress } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import './ModalInf.css';

const PriceForPeople = () => {
  const [childrenCount, setChildrenCount] = useState(0);
  const [adultsCount, setAdultsCount] = useState(0);

  const increaseChildrenCount = () => {
    setChildrenCount(childrenCount + 1);
  }

  const decreaseChildrenCount = () => {
    if(childrenCount > 0) {
      setChildrenCount(childrenCount - 1);
    }
  }

  const increaseAdultsCount = () => {
    setAdultsCount(adultsCount + 1);
  }

  const decreaseAdultsCount = () => {
    if(adultsCount > 0) {
      setAdultsCount(adultsCount - 1);
    }
  }

  return (
    <div className='price_form'>
        <div className="price_people_for_tour"><u style={{color:'rgb(53, 105, 144)'}}><b>Price</b></u></div>
            
            <div className="people">

                <div className="people_people">
                Дети (до 10 лет):
                <span className="photo">
                    <span title='количество людей' className='sizeZnak' onClick={decreaseChildrenCount}> -  </span>
                    <u>{childrenCount} <FaChildDress /></u>
                    <span title='количество людей' className='sizeZnak' onClick={increaseChildrenCount}>  + </span>
                
                </span>
                </div>

                <div className="people_people">
                Взрослые:
                <span className="photo">
                    <span title='количество людей' className='sizeZnak' onClick={decreaseAdultsCount}> -  </span>
                    <u>{adultsCount} <IoPeople /></u>
                    <span title='количество людей' className='sizeZnak' onClick={increaseAdultsCount}>  + </span>
                    
                </span>
            </div>
        </div>
      <hr/>
    </div>
  )
}

export default PriceForPeople;
