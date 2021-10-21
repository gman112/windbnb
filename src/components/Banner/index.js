import React from 'react';

const Banner = ({ banner, numberOfStays, ...props }) => {
    return (
        <div className="banner">
            <p className="banner__title">{banner}</p>
            <p className="banner__subtitle">{`${numberOfStays} results`}</p>
        </div>
    );
};

export default Banner;
