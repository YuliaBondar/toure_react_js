import React from 'react'
import '../Footer/footer.css'
import YouTube from '../Footer/stylePhoto/facebook.png'
import Twitter from '../Footer/stylePhoto/twitter.png'
import TikTok from '../Footer/stylePhoto/tikTok.png'
import Facebook from '../Footer/stylePhoto/youtube.png'
import Cards from '../Footer/stylePhoto/cards.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_component">

            <div className="support">
                <div className="support_name">
                    <li>Support</li>
                </div>
                <div className="support_content">
                    <li>Help Center</li>
                    <li>Safety information</li>
                    <li>Cancellation options</li>
                </div>
            </div>
            
            <div className="company">
                <div className="company_name">
                    <li>Company</li>
                </div>
                <div className="company_content">
                    <li>About us</li>
                    <li>Privacy policy</li>
                    <li>Community Blog</li>
                    <li>Terms of service</li>
                </div>
            </div>

            <div className="concat">
                <div className="contant_name">
                    <li>Concat</li>
                </div>
                <div className="contant_content">
                    <li>FAQ</li>
                    <li>Get in touch</li>
                    <li>Partnerships</li>
                    <li>Partnerships</li>
                </div>
            </div>

            <div className="social">
                <div className="social_name"><li>Social</li></div>
                <div className="seti_content">
                    <li><a href="https://www.facebook.com/?locale=ru_RU" target="_blank" rel="noreferrer">
                        <img src={Facebook} alt="Facebook"/></a></li>
                    <li><a href="https://x.com/i/flow/login" target="_blank" rel="noreferrer">
                        <img src={Twitter} alt="Twitter"/></a>
                    </li>
                    <li><a href="https://www.tiktok.com/login/phone-or-email?lang=ru" target="_blank" rel="noreferrer">
                        <img src={TikTok} alt="TikTok"/></a></li>
                    <li><a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                        <img src={YouTube} alt="YouTube" /></a>
                    </li>
                </div>
            </div>

        </div>
        <div className="container_card">
            <div className="container">
                <div className="copyright">
                    <p>© Copyright Acenda 2024</p>
                </div>
                <div className="cards">
                    <img src={Cards} alt="Cards" />
                
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer