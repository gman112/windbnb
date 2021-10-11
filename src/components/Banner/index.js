import React from 'react';

const Banner = ({ banner, ...props }) => {
    return (
        <div className="banner">
            <p className="banner__title">{banner}</p>
            <p className="banner__subtitle">12+ stays</p>
        </div>
    );
};

export default Banner;
