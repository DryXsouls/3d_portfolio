import React, {useState} from 'react';
import {Link} from "react-router-dom";



function Navbar(){
    const [click, setClick] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setClick(!click);
        setIsActive(!isActive);
    }
    const closeMobileMenu = () =>{
        setClick(false);
        setIsActive(false);
    }


    return (
        <nav className='header' id='nav'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <h1>Matúš Vytykáč</h1>
                </Link>

                <div className={`menu-icon ${isActive ? 'active' : ''}`} onClick={handleClick}>
                    <i className={click? 'fa-solid fa-times' : 'fa-solid fa-bars'} />
                </div>
                <ul className={click? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a href='#about' className='nav-link' onClick={closeMobileMenu}>
                            About
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#portfolio' className='nav-link' onClick={closeMobileMenu}>
                            Portfolio
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contact' className='nav-link' onClick={closeMobileMenu}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
