import React from 'react'
import './Maldives.css'
import {emblem} from'./file_place'

import { FaLongArrowAltRight } from "react-icons/fa";
import './file_place'

const Maldives = () => {
  return (
    <div className='explore_Maldives'>
        <div className="name">
            <h1>EXPLORE MALDIVES</h1>
        </div>

        <div className="information">

            <div className="see_all">
                <p>Lorem Ipsum is simply dummy text of the<br/> 
                    printing and typesetting industry.<br/> 
                    Lorem Ipsum has been the industry's standard<br/> 
                    dummy text ever since the 1500s.
                </p>
                <button className='but_show'><span>See all </span><span>{<FaLongArrowAltRight/>}</span></button>
            </div>
            <div className="example">
                <div className="image_place">
                    {emblem.map(item => (
                        <div key={item.id} className="place">
                            <div className="emblem">
                                <img src={item.imag} alt={item.alt}/>
                            </div>
                            <div className="text">{item.name}</div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </div>
  )
}

export default Maldives