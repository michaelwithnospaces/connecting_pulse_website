import React from 'react';
import Logo from "../Assets/Connect Pulse.png";
import { SiLinkedin } from 'react-icons/si'
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
        <div className='footer-wrapper'>   
            <div className='footer-section-one'>
                <div className='footer-logo-container'>
                    <img src={Logo} alt="" />
                </div>
                <div className='footer-icons'>
                    <a href='https://www.linkedin.com/company/connecting-pulse/'><SiLinkedin/></a>
                    <a href='https://www.instagram.com/connectingpulse/'><BsInstagram/></a>
                </div>
            </div>
            <div className='footer-section-two'>
                <div className='footer-section-columns'>
                    <span>Quality</span>
                    <span>Help</span>
                    <span>Share</span>
                    <span>Team</span>
                    <span>Testimonials</span>
                    <span>Work</span>
                </div>
                <div className='footer-section-columns'>
                    <span>682-306-1846</span>
                    <span>connectingpulse@gmail.com</span>
                    <span>sales.cpulse@gmail.com</span>
                    <span>business.cpulse@gmail.com</span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span>Terms and Conditions</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
        <p className='footer-copyright'>Copyright &#169; 2024 Connecting Pulse. All Rights Reserved</p>
    </>
  )
}

export default Footer
