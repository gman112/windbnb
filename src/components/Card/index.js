import React from 'react';

const Card = ({ host, photo, title, type, rating, beds, ...props }) => {
    return (
        <div className="card">
            <img src={photo} alt="" className="card__image" />
            <div className="card__info">
                {host && <p className="info__host">super host</p>}
                {type === 'Entire apartment' && beds > 0 ? (
                    <p className="info__description">
                        {`${type}, ${beds} bed`}
                    </p>
                ) : (
                    <p className="info__description">{type}</p>
                )}

                <div className="info__rating">
                    <i className="fas fa-star rating">
                        <span className="rating__amount">
                            {rating.toFixed(2)}
                        </span>
                    </i>
                </div>
            </div>
            <p className="card__title">{title}</p>
        </div>
    );
};

export default Card;
