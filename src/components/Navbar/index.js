import * as React from 'react';
import Logo from '../../../svg/logo.svg';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <img src={Logo} alt="logo.svg" />
            </div>
            <div className="navbar__search"></div>
        </div>
    );
};

export default Navbar;
