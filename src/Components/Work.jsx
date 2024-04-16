import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png"
import ChooseMeals from "../Assets/choose-image.png"
import DeliveryMeals from "../Assets/delivery-image.png"

const Work = () => {

    const workInfoData = [
        {
            link: "shock-pen",
            image: PickMeals,
            title: "Shock Pen CPR Trainer",
            text: "Shock-pen for high school students to learn to click at a specific beat."
        },
        {
            link: "led-pen",
            image: ChooseMeals,
            title: "LED Pen CPR Trainer",
            text: "LED pen for elementary and middle school students to learn to click at a specific beat."
        },
        {
            link: "biomarker-device",
            image: DeliveryMeals,
            title: "Biomarker Detection Device",
            text: "Smartphone positioner to detect miRNA biomarkers to effectively detect diseases."
        }
    ]

    return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Research</p>
            <h1 className='primary-heading'>Fueling Progress,</h1>
            <h1 className='primary-heading'>Changing Lives</h1>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet consectetur. Non tincidunt 
                magna non et elit. Dolor  turpis molestie dui
                magnis facilisis at fringilla quam.
            </p>
        </div>
        <div className='work-section-bottom'>
            {workInfoData.map((data) => (
                    <div className='work-section-info'>
                        <a href={data.link}>
                            <div className='info-boxes-img-container'>
                                <img src={data.image} alt=''/>
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                        </a>
                    </div>
            ))}
        </div>
    </div>
    )
}

export default Work
