import React from 'react'
import ADMNE from '../Assets/Partners/ADME (Partner).png'
import Havoc from '../Assets/Partners/Havok (Partner).png'
import ILT from '../Assets/Partners/ILT (Partner).png'
import Minhovate from '../Assets/Partners/Minhovate (Partner).png'
import Naumov from '../Assets/Partners/Naumov Lab (Partner).png'
import Political from '../Assets/Partners/Political Environment (Partner).png'
import YEMS from '../Assets/Partners/YEMS (Partner).png'

const Work = () => {
    return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <h1 className='primary-heading'>Partners</h1>
        </div>
        <div className='partner-images-container'>
            <img src={ADMNE} alt="" />
            <img src={Havoc} alt="" />
            <img src={ILT} alt="" />
            <img src={Minhovate} alt="" />
            <img src={Naumov} alt="" />
            <img src={Political} alt="" />
            <img src={YEMS} alt="" />
        </div>
    </div>
    )
}

export default Work
