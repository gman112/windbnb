import { isNumber, set } from 'lodash';
import React, { useState } from 'react';
import v from 'voca';
const SearchForm = ({ cities, handleClick, ...props }) => {
    const [locations, setLocations] = useState([
        ...new Set(cities.map(({ city }) => city)),
    ]);
    const [showLocations, setShowLocations] = useState(false);
    const [showGuestFilter, setShowGuestFilter] = useState(false);
    const [adultCounter, setAdultCounter] = useState(0);
    const [kidCounter, setKidCounter] = useState(0);
    const [locationInput, setLocationInput] = useState('');
    const [guestInput, setGuestInput] = useState(0);
    const [totalGuests, setTotalGuests] = useState(0);

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
                            setShowGuestFilter(false);
                        }}
                        onChange={({ target }) => {
                            setLocationInput(v.capitalize(target.value));
                            if (target.value === '')
                                setLocations([
                                    ...new Set(cities.map(({ city }) => city)),
                                ]);

                            const filteredSearch = locations.filter(
                                (location) =>
                                    location === v.capitalize(target.value)
                            );
                            if (filteredSearch.length > 0)
                                setLocations(filteredSearch);
                        }}
                    />
                </div>
                <div className="form__group">
                    <label htmlFor="guests">guests</label>
                    <input
                        value={
                            guestInput === 1
                                ? `${guestInput} guest`
                                : `${guestInput} guests`
                        }
                        className="form__input"
                        name="guests"
                        placeholder="Add guests"
                        onFocus={() => {
                            setShowGuestFilter(true);
                            setShowLocations(false);
                        }}
                    />
                    <div className="form__result"></div>
                </div>
                <div className="form__group">
                    <button
                        className="form__btn"
                        onClick={(event) => {
                            setTotalGuests(kidCounter + adultCounter);

                            handleClick({
                                location: locationInput,
                                guests: kidCounter + adultCounter,
                            });
                        }}
                    >
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
                                        onClick={({ target }) => {
                                            setLocationInput(
                                                v.capitalize(target.innerText)
                                            );
                                        }}
                                    >
                                        <i className="fas fa-map-marker-alt"></i>{' '}
                                        <a
                                            href="#"
                                            className="item__link"
                                        >{`${location}`}</a>
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
                                <button
                                    className="filter__btn"
                                    onClick={() => {
                                        setAdultCounter((prev) =>
                                            prev <= 0 ? 0 : prev - 1
                                        );
                                        setGuestInput((prev) =>
                                            prev === 0 ? 0 : prev - 1
                                        );
                                    }}
                                >
                                    <i className="fas fa-minus"></i>
                                </button>
                                <span>{adultCounter}</span>
                                <button
                                    className="filter__btn"
                                    onClick={() => {
                                        setAdultCounter((prev) => prev + 1);
                                        setGuestInput((prev) => prev + 1);
                                    }}
                                >
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
                                <button
                                    className="filter__btn"
                                    onClick={() => {
                                        setKidCounter((prev) =>
                                            kidCounter <= 0 ? 0 : prev - 1
                                        );
                                        setTotalGuests(
                                            (prev) => (prev = kidCounter)
                                        );
                                    }}
                                >
                                    <i className="fas fa-minus"></i>
                                </button>
                                <span>{kidCounter}</span>
                                <button
                                    className="filter__btn"
                                    onClick={() =>
                                        setKidCounter((prev) => prev + 1)
                                    }
                                >
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchForm;
