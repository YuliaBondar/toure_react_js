import React from 'react';
import './FindTravel.css';
import { CiLocationOn } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { RxDividerVertical } from "react-icons/rx";

const destinations = [
  { icon: <CiLocationOn className='loc_pics' />, title: 'Location', description: 'Add destination' },
  { icon: <LuCalendarDays className='loc_pics' />, title: 'Check in', description: 'Add dates' },
  { icon: <LuCalendarDays className='loc_pics' />, title: 'Check out', description: 'Add dates' },
  { icon: <IoPersonOutline className='loc_pics' />, title: 'Guests', description: 'Add guests' }
];

const FindTravel = () => {
  return (
    <div className='find_travel'>
      {destinations.map((destination, index) => (
        <div className="location" key={index}>
          <div className="loc_pic">{destination.icon}</div>
          <div className="box_text">
            <div className="text_name">{destination.title}</div>
            <div className="data">{destination.description}</div>
          </div>
         <div className="vertical"><RxDividerVertical className='vertical'/></div>
        </div> 
      ))}
      <div className="mag_glass">
        <div ><PiMagnifyingGlassThin className="loc_pics_glass"/></div>
      </div>
    </div>
  );
};

export default FindTravel;
