import * as React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Card from './components/Card';
import SearchForm from './components/Search';
import 'style.css';
import '@fortawesome/fontawesome-free/css/all.css';

const App = () => {
    return (
        <>
            {false && <Navbar />}
            {true && <SearchForm />}
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
