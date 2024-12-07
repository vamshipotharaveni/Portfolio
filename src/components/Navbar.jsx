import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import underline from '../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../assets/menu_open.svg'
import menu_close from '../assets/menu_close.svg'

const Navbar = () => {
    const [menu,setmenu] =useState("home");
    return(
        <div className='navbar'>
            <img src={logo} alt='' />
            {/* <img src={menu_open} alt='' className='nav-mob-open'/>           
            <img src={menu_close} alt='' className='nav-mob-close'/>            */}
            <ul className='nav-menu'>
                <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setmenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=""/>:<></>}</li>
                <li><AnchorLink  className='anchor-link' offset={50} href='#about'><p onClick={()=>setmenu("about")}>About me</p></AnchorLink>{menu==="about"?<img src={underline} alt=""/>:<></>}</li>
                <li><AnchorLink  className='anchor-link' offset={50} href='#services'><p onClick={()=>setmenu("services")}>Certifications</p></AnchorLink>{menu==="services"?<img src={underline} alt=""/>:<></>}</li>
                <li><AnchorLink  className='anchor-link' offset={50} href='#work'><p onClick={()=>setmenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={underline} alt=""/>:<></>}</li>
                <li><AnchorLink  className='anchor-link' offset={50} href='#contact'><p onClick={()=>setmenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=""/>:<></>}</li>
            </ul>
            <div className='nav-connect'><AnchorLink  className='anchor-link' offset={50} href='#contact'><p onClick={()=>setmenu("contact")}>Connect with me</p></AnchorLink></div>
        </div>
    )
}

export default Navbar