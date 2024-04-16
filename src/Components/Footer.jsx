import React from 'react';
import Logo from "../Assets/Connect Pulse.png";
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si'
import { BsYoutube } from 'react-icons/bs';
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
                    <BsTwitter/>
                    <SiLinkedin/>
                    <BsYoutube/>
                    <BsInstagram/>
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
                    <span>123-456-7890</span>
                    <span>hello@cpulse.org</span>
                    <span>business@cpulse.org</span>
                    <span>contact@cpulse.org</span>
                </div>
                <div className='footer-section-columns'>
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
