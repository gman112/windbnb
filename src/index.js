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

const App = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <>
            <SearchContext.Provider value={{ toggle, setToggle }}>
                {toggle && <Navbar />}
                {!toggle && <SearchForm cities={stays} />}
            </SearchContext.Provider>
            <Banner />
            <div className="card__container">
                {stays.map(
                    ({
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
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
