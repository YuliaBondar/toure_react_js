import React from 'react'
import './SpecialOffer.css'
import Images_ph from './photo1.png'

const SpecialOffer = () => {
  return (
    <div className='get_offer_window'>
      <div className="window_request">

        <div className="images_back">
          <img src={Images_ph} alt='image_photo'/>
        </div>
        
        <div className="get_offer">

          <div className="text">
            <h1>Get special offers,<br/>
            and more from travelworld</h1>
          </div>

          <div className="input_email">
            <div className="input_email_text">
              <input type='email' placeholder='Enter your email'/>
            </div>
            <button className='button_subscrible'>Subscrible</button>
          </div>

        </div>

      </div>
  
    </div>
  )
}

export default SpecialOffer