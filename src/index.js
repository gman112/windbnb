import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Card from './components/Card';
import SearchForm from './components/Search';
import SearchContext from './searchContext';
import 'style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import data from 'stays.json';

const App = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <>
            <SearchContext.Provider value={{ toggle, setToggle }}>
                {toggle && <Navbar />}
                {!toggle && <SearchForm />}
            </SearchContext.Provider>
            <Banner />
            <div className="card__container">
                <Card host={true} />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
