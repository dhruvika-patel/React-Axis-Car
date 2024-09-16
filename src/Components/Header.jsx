import React from 'react'
import Navbtn from './Navbtn'
import '../Components/Style/Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
      }
    return (
        <div>
            <header>
                <div className="container">
                    <div className="inner-header-item">
                        <div className="header-logo">
                            <img src="./images/logo.png" alt="" />
                        </div>
                        <div className='nav-toggle' onClick={handleToggle}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ul className={`Nav-link ${isOpen ? "open" : ""}`}>
                            <li>
                                <a href="">Vehicles</a>
                            </li>
                            <li>
                                <a href="">Design</a>
                            </li>
                            <li>
                                <a href="">Shop</a>
                            </li>
                            <div className="header-btn">
                                <Navbtn />
                            </div>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;