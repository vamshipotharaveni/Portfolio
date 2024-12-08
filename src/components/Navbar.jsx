import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import underline from '../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../assets/menu_open.svg';
import menu_close from '../assets/menu_close.svg';

const Navbar = () => {
    const [menu, setMenu] = useState('home');
    const menuRef = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu state

    const openMenu = () => {
        menuRef.current.style.right = '0';
        setIsMenuOpen(true); // Update state when menu is opened
    };

    const closeMenu = () => {
        menuRef.current.style.right = '-350px';
        setIsMenuOpen(false); // Update state when menu is closed
    };

    useEffect(() => {
        // Close menu if the user scrolls
        const handleScroll = () => {
            if (isMenuOpen) {
                closeMenu(); // Close menu on scroll
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            // Clean up the event listener
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuOpen]); // Only trigger effect if menu is open

    return (
        <div className='navbar'>
            <img src={logo} alt='' />
            <div className='opt1'>
                <img
                    src={menu_open}
                    onClick={openMenu}
                    alt=''
                    className='nav-mob-open'
                    style={{ display: isMenuOpen ? 'none' : 'block' }} // Hide when menu is open
                />
            </div>
            <ul ref={menuRef} className="nav-menu">
                <div className='opt'>
                    <img
                        src={menu_close}
                        onClick={closeMenu}
                        alt=''
                        className='nav-mob-close'
                        style={{ display: isMenuOpen ? 'block' : 'none' }} // Show only when menu is open
                    />
                </div>
                <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu('home')}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt="" /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu('about')}>About me</p></AnchorLink>{menu === "about" ? <img src={underline} alt="" /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu('services')}>Certifications</p></AnchorLink>{menu === "services" ? <img src={underline} alt="" /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu('work')}>Portfolio</p></AnchorLink>{menu === "work" ? <img src={underline} alt="" /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu('contact')}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt="" /> : <></>}</li>
            </ul>
            <div className='nav-connect'>
                <AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu('contact')}>Connect with me</p></AnchorLink>
            </div>
        </div>
    );
};

export default Navbar;
