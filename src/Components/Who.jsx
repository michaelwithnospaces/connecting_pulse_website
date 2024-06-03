import React from 'react';
import Navbar from "./Navbar";
import BannerBackground from "../Assets/Banner Background.png";
import BannerImage from "../Assets/Connect Pulse Logo.png";
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div className="home-container">
        <Navbar />
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">
                Who Are We
            </h1>
            <p className="primary-text">
              Connecting Pulse is a United Nations Civil Society and 501(c)(3) providing health education to low-income areas. We are split into three collaborating departments: education, advocacy, and research. To date, we have provided CPR training to Title 1 schools and created patented devices, board games, video games, and children's books.
            </p>
            <div className="home-buttons-container">
              <Link to="/education">
                <button className="secondary-button">Learn More</button>
              </Link>
              <button className="play-game-button"><BsFillPlayCircleFill/>PlayGame</button>
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
