import React from 'react';
import ProductBackground from "../Assets/Product Section Background.png";
import ProductBackgroundImage from "../Assets/Card Picture.png";
import { Link } from 'react-router-dom';
import { BsFillPlayCircleFill } from 'react-icons/bs';

const Product = () => {
  return (
    <div className="product-section-container">
        <div className="product-background-image-container">
            <img src={ProductBackground} alt=""/>
        </div>
        <div className="product-section-image-container">
            <img src={ProductBackgroundImage} alt=""/>
        </div>
        <div className="product-section-text-container">
            <p className="primary-subheading">Education</p>
            <h1 className="primary-heading">
                Educating Minds, Changing Lives 
            </h1>
            <p className="primary-text">
                Unlike schools in affluent areas, Title One schools often lack essential health education like CPR, which can have fatal consequences to a stranger, friend, or family; <b>let's change this narrative.</b>
            </p>
            <div className="product-buttons-container">
                <Link to="/advocacy">
                    <button className="secondary-button">Learn More</button>
                </Link>
                <button className="play-game-button"><BsFillPlayCircleFill/>PlayGame</button>
            </div>
        </div>
    </div>
  );
};

export default Product;
