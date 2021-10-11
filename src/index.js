import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Card from './components/Card';
import SearchForm from './components/Search';
import SearchContext from './searchContext';
import 'style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import stays from './stays.json';
import { Fragment } from 'react';

const App = () => {
    const [toggle, setToggle] = useState(true);
    const [staysData, setStays] = useState(stays);
    const [banner, setBanner] = useState('trending stays');
    const handleClick = ({ location, guests }) => {
        setStays(
            staysData.filter(
                ({ city, maxGuests }) =>
                    city === location && maxGuests === guests
            )
        );
        setBanner(`stays in ${location}`);
        setToggle(true);
    };
    return (
        <Fragment>
            <SearchContext.Provider value={{ toggle, setToggle }}>
                {toggle && <Navbar />}
                {!toggle && (
                    <SearchForm cities={staysData} handleClick={handleClick} />
                )}
            </SearchContext.Provider>
            <Banner banner={banner} />
            <div
                className={`card__container ${
                    toggle ? '' : 'card__container--blur'
                }`}
                onClick={() => setToggle(!toggle)}
            >
                {staysData.map(
                    ({
                        id,
                        city,
                        country,
                        superHost,
                        title,
                        rating,
                        maxGuests,
                        beds,
                        photo,
                        type,
                    }) => {
                        return (
                            <Card
                                key={id}
                                city={city}
                                country={country}
                                host={superHost}
                                title={title}
                                rating={rating}
                                maxGuests={maxGuests}
                                beds={beds}
                                photo={photo}
                                type={type}
                            />
                        );
                    }
                )}
            </div>
        </Fragment>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
