import { useState } from 'react';
import Navbar from './components/Navbar';
import ResultBanner from './components/ResultBanner';
import FilterDraw from './components/FilterDraw';
import CardList from './components/CardList';
import stays from './stays.json';

const App = () => {
  const [data, setData] = useState(stays);
  const [toggle, istoggle] = useState(true);
  const [location, setLocation] = useState('');

  const filterData = (total, childTotal, adultTotal) => {
    const totalGuests = childTotal + adultTotal;
    total > 0
      ? setData(
          stays.filter(
            ({ city, maxGuests }) =>
              city === location && maxGuests === parseInt(total)
          )
        )
      : setData(
          stays.filter(
            ({ city, maxGuests }) =>
              city === location && maxGuests === parseInt(totalGuests)
          )
        );

    istoggle(true);
  };

  return (
    <div className='flex flex-col lg:flex lg:justify-between lg:flex-row lg:items-center lg:mt-12 lg:mx-8 lg:flex-wrap'>
      {toggle ? (
        <Navbar toggleNavbar={(toggle) => istoggle(toggle)} />
      ) : (
        <FilterDraw
          toggleNavbar={(toggle) => istoggle(toggle)}
          filterLocationValue={(location) => setLocation(location)}
          filterData={filterData}
          locations={['London', 'Birmingham', 'Liverpool', 'Edinburgh']}
          location={location}
        />
      )}
      <ResultBanner results={data.length} />
      <CardList data={data} />
    </div>
  );
};

export default App;
