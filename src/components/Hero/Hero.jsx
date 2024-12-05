import React from 'react'
import './Hero.css'
import profile_img from '../../assets/dpp-modified.png'
const Hero = () =>{

    return(

        <div className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Vamshi potharaveni </span>am a Web developer</h1>
            <p>I had a greate Knowlege on the front end and prior knowledge on the back end</p>
            <div className='hero-action'>
                <div className='hero-connect'>
                    connect with me
                </div>
                <div className='hero-resume'>My resume</div>
            </div>
        </div>
    )
}

export default Hero