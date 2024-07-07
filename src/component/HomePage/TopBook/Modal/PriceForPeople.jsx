import React, { useState } from 'react';
import { FaChildDress } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import './ModalInf.css';
import { PiPlusThin } from "react-icons/pi";
import { PiMinusLight } from "react-icons/pi";
import Order from './Order'

const PriceForPeople = ({selectedItem}) => {

  const [childrenCount, setChildrenCount] = useState(0);
  const [adultsCount, setAdultsCount] = useState(0);
  const [childrenPrice, setChildrenPrice] = useState(0);
  const [AdultPrice, setAdultPrice] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const increaseChildrenCount = () => {
    setChildrenCount(childrenCount + 1);
    setChildrenPrice((childrenCount + 1) * (selectedItem.money / 2));
  }

  const decreaseChildrenCount = () => {
    if(childrenCount > 0) {
      setChildrenCount(childrenCount - 1);
      setChildrenPrice((childrenCount - 1) * (selectedItem.money / 2));
    }
  }

  const increaseAdultsCount = () => {
    setAdultsCount(adultsCount + 1);
    setAdultPrice((adultsCount + 1) * (selectedItem.money));
  }

  const decreaseAdultsCount = () => {
    if(adultsCount > 0) {
      setAdultsCount(adultsCount - 1);
      setAdultPrice((adultsCount - 1) * (selectedItem.money));
    }
  }

  const handlePhoneNumberChange = (e) => {
    const re = /[^0-9+]/g;
    const formattedValue = e.target.value.replace(re, ''); 
    setPhoneNumber(formattedValue);

  }
 
  return (
    <div className='price_form'>
      <div className="price_people_for_tour"><u style={{color:'rgb(53, 105, 144)'}}><b>Price</b></u><br/><br/></div>
      <div className="people">
        <div className="people_people">

          Дети (до 10 лет):<br/><br/>
          <span className="photo">
            <span title='количество людей'  > {<PiMinusLight onClick={decreaseChildrenCount} className='sizeZnak'/>}</span>
            <u> {childrenCount} <FaChildDress /></u>
            <span title='количество людей' >{<PiPlusThin onClick={increaseChildrenCount} className='sizeZnak'/>} </span>
            {new Intl.NumberFormat(
            'ru-US',
            { style: 'currency',currency: 'USD',
            }).format( childrenPrice)}
            
          </span>
        </div>

        <div className="people_people">

          Взрослые:<br/><br/>
          <span className="photo">
            <span title='количество людей'> { <PiMinusLight onClick={decreaseAdultsCount} className='sizeZnak'/>} </span>
            <u> {adultsCount} <IoPeople /></u>
            <span title='количество людей'> {< PiPlusThin onClick={increaseAdultsCount} className='sizeZnak'/>} </span>
            
            {new Intl.NumberFormat(
            'ru-US',
            {style: 'currency',currency: 'USD',
            }).format( AdultPrice)}
          </span>
        </div>
      </div><hr/>

      <div className="number">
      <label htmlFor="numberInput">Для обратной связи введите свой номер телефона: </label>
      <input
        style={{ width: '98%', border: isInputEmpty ? '1px solid red' : '1px solid black' }}
        name="number"
        placeholder="+375 ()"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      
      </div>
      
      <div className="order">
        
        <span>
         
          < Order 
          childrenPrice={childrenPrice}
          AdultPrice={AdultPrice}
          childrenCount={childrenCount}
          adultsCount={adultsCount}
          selectedItem={selectedItem}
          phoneNumber={phoneNumber}
          setIsInputEmpty={setIsInputEmpty}
          // handleOrderSubmit={handleOrderSubmit}
          />
        </span>
      </div>
      <hr/>
    </div>
  )
}

export default PriceForPeople;
