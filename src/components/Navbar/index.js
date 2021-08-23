import React, { useContext } from 'react';
import SearchContext from '../../searchContext';
import Logo from '../../../svg/logo.svg';

const Navbar = () => {
    const { toggle, setToggle } = useContext(SearchContext);
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <img src={Logo} alt="logo.svg" />
            </div>
            <div className="navbar__search">
                <input
                    type="text"
                    className="search__input"
                    placeholder="Location"
                    onFocus={() => setToggle(false)}
                />
                <input
                    type="number"
                    className="search__input"
                    placeholder="Add guests"
                />
                <button className="search__btn">
                    <i className="fas fa-search search__icon"></i>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
