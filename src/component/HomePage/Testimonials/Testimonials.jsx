import React from 'react';
import './Testimonials.css';
import { Carousel } from './Testimon.js';
import { test } from './Testimonials_people.js';

const StarRating = ({ numberOfStars }) => {
  const starIcons = [];

  for (let i = 1; i <= numberOfStars; i++) {
    starIcons.push(
      <span key={i} className="yellow-star">★</span>
    );
  }
  return <div>{starIcons}</div>;
};


const FeatureNews = () => {
  const renderPlaces = (start, end) => {
    return test.slice(start, end).map(item => (
      <div key={item.id} className="place">
        <div className="emblem_ph">
          <img src={item.imag} alt={item.alt}/>
        </div>
        <div className="about_place">
          <div className="name_reiting">
            <div className="textt">{item.name}</div>
            <StarRating numberOfStars={item.star} />
          </div>
          <div className="prof">{item.profession}</div>
          <div className="class_text">{item.text}</div>
          
        </div>
      </div>
    ));
  };

  return (
    <Carousel>
      <div className="items item_1">
        <div className="places_1">
          {renderPlaces(0, 3)}
        </div>
      </div>
      <div className="items item_2">
        <div className="places_1">
          {renderPlaces(3, 6)}
        </div>
      </div>
      <div className="items item_1">
        <div className="places_1">
          {renderPlaces(6, 9)}
        </div>
      </div>
    </Carousel>
  );
};

export default FeatureNews;
