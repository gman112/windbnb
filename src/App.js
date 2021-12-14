import { useState } from 'react';
import Navbar from './components/Navbar';
import ResultBanner from './components/ResultBanner';
import CardList from './components/CardList';
import stays from './stays.json';

const App = () => {
  const [data, setData] = useState(stays);

  const filterData = (total, childTotal, adultTotal) => {
    /* const totalGuests = childTotal + adultTotal;
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
        ); */
  };

  return (
    <div className='flex flex-col lg:flex lg:justify-between lg:flex-row lg:items-center lg:mt-12 lg:mx-8 lg:flex-wrap'>
      <Navbar />
      <ResultBanner results={data.length} />
      <CardList data={data} />
    </div>
  );
};

export default App;
