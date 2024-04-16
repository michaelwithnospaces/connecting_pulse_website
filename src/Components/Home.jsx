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
                Educating Minds, Changing Lives
            </h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur. 
                Non tincidunt. Dolor  turpis molestie dui quam
                magna non et elit. Dolor  turpis molestie dui
                magnis facilisis at fringilla quam.
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
