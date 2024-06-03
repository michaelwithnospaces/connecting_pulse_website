import React from 'react';
import BannerBackground from "../Assets/Product Section Background Reverse.png";
import BannerImage from "../Assets/advocacy.png";
// import { BsFillPlayCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div className="home-container">
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <p className='primary-subheading'>Advocacy</p>
            <h1 className="primary-heading">
              Championing Health, Changing Lives.
            </h1>
            <p className="primary-text">
            Over 40 million Americans lack health care access, ignored by re-elected politicians funded by overcharging pharmaceutical companies. Many feel voiceless, <b>but you do have a voice.</b>
            </p>
            <div className="home-buttons-container">
              <Link to="/education">
                {/* <button className="secondary-button">Learn More</button> */}
              </Link>
              {/* <button className="play-game-button"><BsFillPlayCircleFill/>PlayGame</button> */}
            </div>
          </div>
          <div className="home-image-section">
            <img src={BannerImage} alt="" />
          </div>
        </div>
      </div>
    );
  };

export default Home;
