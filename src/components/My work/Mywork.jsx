import React from 'react'
import './Mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import work1 from '../../assets/mywork1.png'
import work2 from '../../assets/mywork2.png'
import work3 from '../../assets/mywork3.png'
import work4 from '../../assets/mywork4.png'
const Mywork = () =>{
    return (
        <div id="work" className='mywork'>
        <div className='mywork-title'>
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className='mywork-container'>
            <div className='work'>
                <img src={work3}/>
            </div>
            <div className='work'>
                <img src={work4}/>
            </div>
            <div className='work'>
                <img src={work2}/>
            </div>
            <div className='work'>
                <img src={work1}/>
            </div>
            
        </div>
        <button 
    className="btn-projects" 
    onClick={() => window.location.href = 'https://visit-projects.netlify.app/'}
>
    View Projects 🡺
</button>       

 </div>
    )
}
export default Mywork