import React, { useState, useRef } from 'react';
import _ from 'lodash';
const SearchForm = ({ cities, ...props }) => {
    const [locationInput, setLocationInput] = useState('');
    const [locations, setLocations] = useState([
        ...new Set(cities.map(({ city }) => city)),
    ]);
    const [showLocations, setShowLocations] = useState(false);
    const [showGuestFilter, setShowGuestFilter] = useState(false);
    return (
        <div className="form__container">
            <div className="form">
                <div className="form__group">
                    <label htmlFor="location">location</label>
                    <input
                        value={locationInput}
                        type="text"
                        className="form__input"
                        name="location"
                        placeholder="Add location"
                        onFocus={() => {
                            setShowLocations(true);
                        }}
                        onChange={({ target }) => {
                            setLocationInput(target.value);
                        }}
                    />
                </div>
                <div className="form__group">
                    <label htmlFor="guests">guests</label>
                    <input
                        type="number"
                        className="form__input"
                        name="guests"
                        placeholder="Add guests"
                        onFocus={() => {
                            setShowGuestFilter(true);
                        }}
                    />
                    <div className="form__result"></div>
                </div>
                <div className="form__group">
                    <button className="form__btn">
                        <i className="fas fa-search btn__icon"></i> search
                    </button>
                </div>
            </div>
            <div className="filter__container">
                <div className="location__container">
                    <ul className="location__list">
                        {showLocations &&
                            locations.map((location) => {
                                return (
                                    <li
                                        key={location}
                                        className="list__item"
                                        onClick={({ target }) =>
                                            console.log(target.innerText)
                                        }
                                    >
                                        <i className="fas fa-map-marker-alt"></i>{' '}
                                        <a
                                            href="#"
                                            className="item__link"
                                        >{`${location}`}</a>
                                        <span>, Britain</span>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
                <div className="guest__container">
                    {showGuestFilter && (
                        <div className="guests__filter">
                            <div className="filter__text">adult</div>
                            <div className="filter__subtext">
                                ages 13 and above
                            </div>
                            <div className="filter__btns">
                                <button className="filter__btn">
                                    <i className="fas fa-minus"></i>
                                </button>
                                <span>0</span>
                                <button className="filter__btn">
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    )}
                    {showGuestFilter && (
                        <div className="guests__filter">
                            <div className="filter__text">kids</div>
                            <div className="filter__subtext">ages 2-12</div>
                            <div className="filter__btns">
                                <button className="filter__btn">
                                    <i className="fas fa-minus"></i>
                                </button>
                                <span>0</span>
                                <button className="filter__btn">
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/*             <div className="result">
                <ul className="result__list">
                    {showLocations &&
                        locations.map((location) => {
                            return (
                                <li
                                    key={location}
                                    className="list__item"
                                    onClick={({ target }) =>
                                        console.log(target.innerText)
                                    }
                                >
                                    <i className="fas fa-map-marker-alt"></i>{' '}
                                    <a
                                        href="#"
                                        className="item__link"
                                    >{`${location}`}</a>
                                    <span>, Britain</span>
                                </li>
                            );
                        })}
                </ul>
            </div>
            <div className="guests">
                {showGuestFilter && (
                    <div className="guests__filter">
                        <div className="filter__text">adult</div>
                        <div className="filter__subtext">ages 13 and above</div>
                        <div className="filter__btns">
                            <button className="filter__btn">
                                <i className="fas fa-minus"></i>
                            </button>
                            <span>0</span>
                            <button className="filter__btn">
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                )}
                {showGuestFilter && (
                    <div className="guests__filter">
                        <div className="filter__text">kids</div>
                        <div className="filter__subtext">ages 2-12</div>
                        <div className="filter__btns">
                            <button className="filter__btn">
                                <i className="fas fa-minus"></i>
                            </button>
                            <span>0</span>
                            <button className="filter__btn">
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                )}
            </div> */}
        </div>
    );
};

export default SearchForm;
