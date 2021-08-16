import React from 'react';

const Card = ({ host, ...props }) => {
    return (
        <div className="card">
            <img src="https://bit.ly/2Xr95Jv" alt="" className="card__image" />
            <div className="card__info">
                {host && <p className="info__host">super host</p>}
                <p className="info__description">entire apartment 2 beds</p>
                <div className="info__rating">
                    <i class="fas fa-star rating">
                        <span className="rating__amount">4.96</span>
                    </i>
                </div>
            </div>
            <p className="card__title">stylist apartment in center of city</p>
        </div>
    );
};

export default Card;
