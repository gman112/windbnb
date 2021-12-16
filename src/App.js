import { useState } from 'react';
import Navbar from './components/Navbar';
import ResultBanner from './components/ResultBanner';
import CardList from './components/CardList';
import stays from './stays.json';

const App = () => {
  const [data, setData] = useState(stays);

  const filterData = (location, totalGuests) => {
    setData(
      stays.filter(
        ({ city, maxGuests }) =>
          location.charAt(0).toUpperCase() + location.slice(1) === city &&
          parseInt(totalGuests) === maxGuests
      )
    );
  };

  return (
    <div className='flex flex-col lg:flex lg:justify-between lg:flex-row lg:items-center lg:mt-12 lg:mx-8 lg:flex-wrap'>
      <Navbar
        filterOptions={(location, totalGuests) =>
          filterData(location, totalGuests)
        }
      />
      <ResultBanner results={data.length} />
      <CardList data={data} />
    </div>
  );
};

export default App;
