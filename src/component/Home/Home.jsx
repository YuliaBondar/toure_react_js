import React from 'react';
import MyChoose from '../HomePage/Choose/MyChoose';
import TopBook from '../HomePage/TopBook/TopBook';
import Partners from '../HomePage/partners/Partners';
import Maldives from '../ExploreMaldives/Maldives';
import FeatureNews from '../HomePage/FeatureNews/FeatureNews';
import SpecialOffer from '../HomePage/SpecialOffer/SpecialOffer'
import Testimonials from '../HomePage/Testimonials/Testimonials'

const Home = () => {
  return (
    <div className='home'>
      <MyChoose/>
      <TopBook />
      <Partners />
      <Maldives />
      <FeatureNews />
      <Testimonials />
      <SpecialOffer />
    </div>
  );
}

export default Home;