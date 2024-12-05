import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import photo1 from '../../assets/certificate1.png'
import certificate2 from '../../assets/certificate2.png'
const Services = () => {
    return (
        <div className='services'>
            <div className='services-title'>
                <h1>Certifications</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className='services-container'>
                <div className='service'>
                    <img src={certificate2} alt='' />
                    <h3>Java Certification</h3>
                    <p> Java certification from HackerRank by excelling in a skill-based test. Demonstrates strong proficiency in Java programming and problem-solving abilities.</p>
                </div>
                <div className='service'>
                    <img src={photo1} alt='' />
                    <h3>Web Development</h3>
                    <p>Completed a Web Development certification from Internshala, gaining hands-on experience in creating responsive websites using HTML, CSS, JavaScript, and modern frameworks.</p>
                </div>

            </div>
        </div>
    )
}
export default Services