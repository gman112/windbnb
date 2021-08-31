import React from 'react';

const SearchForm = ({ cities, ...props }) => {
    return (
        <div className="form__container">
            <div className="form">
                <div className="form__group">
                    <label htmlFor="location">location</label>
                    <input
                        type="text"
                        className="form__input"
                        name="location"
                        placeholder="Add location"
                    />
                </div>
                <div className="form__group">
                    <label htmlFor="guests">guests</label>
                    <input
                        type="number"
                        className="form__input"
                        name="guests"
                        placeholder="Add guests"
                    />
                    <div className="form__result"></div>
                </div>
                <div className="form__group">
                    <button className="form__btn">
                        <i className="fas fa-search btn__icon"></i> search
                    </button>
                </div>
            </div>
            <div className="result">
                <ul className="result__list">
                    {cities
                        .filter(({ city }) => {
                            return [...new Set(cities.city)];
                        })
                        .map((city) => {
                            return (
                                <li className="list__item">
                                    <i className="fas fa-map-marker-alt"></i>{' '}
                                    {`${city}, Britain`}
                                </li>
                            );
                        })}
                </ul>
            </div>
            <div className="guests">
                {/*  <div className="guests__filter">
                    <div className="filter__text">adult</div>
                    <div className="filter__subtext">ages 13 and above</div>
                    <div className="filter__btns">
                        <button className="filter__btn">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span>0</span>
                        <button className="filter__btn">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div> */}
                {/* <div className="guests__filter">
                    <div className="filter__text">kids</div>
                    <div className="filter__subtext">ages 2-12</div>
                    <div className="filter__btns">
                        <button className="filter__btn">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span>0</span>
                        <button className="filter__btn">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default SearchForm;
