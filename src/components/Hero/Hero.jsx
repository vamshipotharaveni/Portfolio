import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_img from '../../assets/dpp-modified.png'
const Hero = () =>{

    return(

        <div id="home" className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Vamshi potharaveni </span>am a Web developer</h1>
            <p>I had a greate Knowlege on the front end and good knowledge on the back end</p>
            <div className='hero-action'>
                <div className='hero-connect'>
                    <AnchorLink  className='anchor-link' offset={50} href='#contact'>connect with me<p onClick={()=>setmenu("contact")}></p></AnchorLink>
                </div>
                <div className='hero-resume'><a href="https://drive.google.com/file/d/1ynZE9ZDCRYfmG_60wT9_nDnHJgzuup96/view?usp=sharing" download>
  <button className="download-btn">Download Resume</button>
</a></div>
            </div>
        </div>
    )
}

export default Hero