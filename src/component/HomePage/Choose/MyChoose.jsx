import React from 'react'
import '../Choose/MyChoose.css'
import Competitive from '../Choose/stylePhoto/Frame1157.png'
import Secure from '../Choose/stylePhoto/Frame1158.png'
import Seamless from '../Choose/stylePhoto/Frame1159.png'


const MyChoose = () => {
  return (
   <div className="choose">
        <div className="text_choose">
            <h1>WHY CHOOSE US?</h1>
        </div>
        <div className="examples">
            <div className="competitive">
                <img src={Competitive} alt="Competitive"/>
                <h3>Competitive Prices</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            </div>
            <div className="secure">
                <img src={Secure} alt="Competitive"/>
                <h3>Secure Booking</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            </div>
            <div className="seamless">
              <img src={Seamless} alt="Competitive"/>
              <h3>Seamless Experience</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            </div>
        </div>

   </div>
  )
}
export default MyChoose