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
        <nav className='header'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <h1>Matúš Vytykáč</h1>
                </Link>

                <div className={`menu-icon ${isActive ? 'active' : ''}`} onClick={handleClick}>
                    <i className={click? 'fa-solid fa-times' : 'fa-solid fa-bars'} />
                </div>
                <ul className={click? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-link' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/portfolio' className='nav-link' onClick={closeMobileMenu}>
                            Portfolio
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-link' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
