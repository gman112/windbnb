import React from 'react';

const SearchForm = () => {
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
        </div>
    );
};

export default SearchForm;
