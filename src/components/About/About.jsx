import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/dpp.jpg'
const About = () => {
    return (

        <div id="about" className='about'>
            <div className='about-title'>
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className='about-sections'>
                <div className='about-left'>
                    <img src={profile_img} alt='' />
                </div>
                <div className='about-right'>
                    <div className='about-para'>
                        <p>I’m Vamshi Potharaveni, a passionate and detail-oriented developer with a strong foundation in Java, Python, and web development technologies like HTML, CSS, and JavaScript.</p>
                        <p>I enjoy solving complex problems through programming and have worked on diverse projects like lung cancer detection using Python and interactive games like Tic-Tac-Toe using Java</p>
                    </div>
                    <div className='about-skills'>
                        <div className='about-skill'>
                            <p>Html & css</p><hr style={{ width: "70%" }} />
                        </div>
                        <div className='about-skill'>
                            <p>Java Script</p><hr style={{ width: "50%" }} />
                        </div>
                        <div className='about-skill'>
                            <p>React</p><hr style={{ width: "60%" }} />
                        </div>
                        <div className='about-skill'>
                            <p>My Sql</p><hr style={{ width: "70%" }} />
                        </div>
                        <div className='about-skill'>
                            <p>Java</p><hr style={{ width: "80%" }} />
                        </div>
                        <div className='about-skill'>
                            <p>Python</p><hr style={{ width: "50%" }} />
                        </div>
                    </div>
                </div>
            </div>
        <div className='about-achivements'>

        <div className='about-achivement'>
        <h1>10+</h1>
        <p>Front End projects has done</p>
        </div> <hr/>

        <div className='about-achivement'>
        <h1>90+</h1>
        <p>problems solved in Hacker rank</p>
        </div> <hr/>

        <div className='about-achivement'>
        <h1>15+</h1>
        <p>Problems solved in Leet code</p>
        </div> <hr/>

        </div>    
        </div>
    )
}
export default About