import React from 'react'
import './FeatureNews.css'
import {Carousel} from './Carousel.js'
import {places} from './futureNews.js'
import { LuCalendarDays } from "react-icons/lu";
import { CiCircleChevRight } from "react-icons/ci";

const FeatureNews = () => {
  return (
    
    <Carousel>
        <div className="item item_1">
            <div className="places">
            {places.slice(0, 3).map(item => (
                
                <div key={item.id} className="place">

                  <div className="emblem">
                    <img src={item.imag} alt={item.alt}/>
                  </div>
                  <div className="about_place">
                    
                    <div className='date'>{<LuCalendarDays/>}{item.date}</div>
                    <div className="text">{item.name}</div>
                    <div className="class_text">{item.text}</div>
                    <div className="button_more">
                      <button >{<CiCircleChevRight style={{ width: '22px', height:'22px' }}/>}See more</button>
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>


        </div>
        <div className="item item_2">
          <div className="places">
          {places.slice(3,6).map(item => (
                
                <div key={item.id + 4} className="place">

                  <div className="emblem">
                    <img src={item.imag} alt={item.alt}/>
                  </div>
                  <div className="about_place">
                    
                    <div className='date'>{<LuCalendarDays/>}{item.date}</div>
                    <div className="text">{item.name}</div>
                    <div className="class_text">{item.text}</div>
                    <div className="button_more">
                      <button >{<CiCircleChevRight style={{ width: '22px', height:'22px' }}/>}See more</button>
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>
        </div>
        <div className="item item_1">
        <div className="places">
          {places.slice(6,7).map(item => (
                
                <div key={item.id + 4} className="place">

                  <div className="emblem">
                    <img src={item.imag} alt={item.alt}/>
                  </div>
                  <div className="about_place">
                    
                    <div className='date'>{<LuCalendarDays/>}{item.date}</div>
                    <div className="text">{item.name}</div>
                    <div className="class_text">{item.text}</div>
                    <div className="button_more">
                      <button >{<CiCircleChevRight style={{ width: '22px', height:'22px' }}/>}See more</button>
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>
        </div>
    </Carousel>
  )
}

export default FeatureNews