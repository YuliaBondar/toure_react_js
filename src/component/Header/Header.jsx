import React from 'react';
import '../Header/header.css';
import { Link } from 'react-router-dom';
import { SlBasket } from "react-icons/sl";
import FindTravel from './FindTravel'

const Header = () => {
    
  return (
    <div className='header'>
        <div className="homepage">

            <div className="navigation">
                <div className="logo"><Link to='/home'>Holiday.by</Link></div>

                <div className="navigat">
                    <nav>
                        <ul>
                            <li><Link to='/home'title='Home' >Home</Link></li>
                            <li><Link to='/ExploreMaldives' title='example'>Destinations</Link></li>
                            <li>Blog</li>
                            <li>News</li>
                            <li>Contact</li>
                            <li>{<SlBasket />}</li>
                           
                        </ul>
                    </nav>
                </div>
                
           </div>
        
        </div>
       <div className="choice_page">
            <div className="choice_toure_place">
                <div className="text_choice">
                    <h1>Good Morning!</h1>
                    <p>Explore beautiful places in the world with Acenda</p>
                </div>

                <div className="choice_input">
                    <FindTravel />
                </div>
            </div>
       </div>
        

    </div>
  )
}

export default Header