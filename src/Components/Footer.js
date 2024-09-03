import React from 'react'
import {BsTwitter, BsYoutube} from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import {FaFacebookF} from 'react-icons/fa';
import Logo from '../Assets/Logo.svg';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
                <img src={Logo} alt=''/>
            </div>
            <div className='footer-icons'>
                <BsTwitter/>
                <SiLinkedin/>
                <BsYoutube/>
                <FaFacebookF/>
            </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Career</span>
                <span>Testimonial</span>
                <span>Work</span>
            </div>
            <div className='footer-section-columns'>
                <span>244-5333-7783</span>
                <span>77/A</span>
                <span>Nawala,Colombo</span>
                <span>foodie@gmail.com</span>
            </div>
            <div className='footer-section-columns'>
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
