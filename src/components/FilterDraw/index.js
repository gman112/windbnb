import { useState } from 'react';
import ResultList from './ResultList';
import GuestFilter from './GuestFilter';

const FilterDraw = ({ toggleNavbar, locations }) => {
  const [adultCounter, setAdultCounter] = useState(0);
  const [childCounter, setChildCounter] = useState(0);
  return (
    <div className='flex flex-col lg:flex lg:flex-row lg:w-full lg:flex-wrap'>
      <div className='flex justify-between mx-4 mt-4 items-center'>
        <p className='font-bold text-sm lg:hidden'>edit your search</p>
        <button
          className='outline-none lg:hidden'
          onClick={() => toggleNavbar(true)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 lg:h-8 lg:w-8'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>
      <div className='flex flex-col border-2 border-gray-100 mx-4 rounded-2xl mt-4 relative shadow-md lg:flex lg:flex-row lg:w-3/4'>
        <input
          type='text'
          placeholder='London'
          className='h-14 border-b-1 border-gray-200 px-4 capitalize lg:focus:border-gray-600 lg:w-1/2 lg:border-r-2 lg:border-b-0 rounded-l-2xl'
        />
        <input
          type='number'
          placeholder='add guests'
          className='h-14 px-4 capitalize lg:w-1/2 lg:focus:border-gray-600 lg:border-b-0 rounded-r-2xl'
        />
      </div>
      <ResultList locations={locations} showList={'lg:hidden'} />
      <button className='flex bg-red-500 justify-evenly text-white rounded-3xl w-2/5 self-center py-4 px-4 mt-6 lg:w-1/5 lg:justify-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
        <span className='capitalize'>search</span>
      </button>
      <div className='lg:flex lg:w-3/4 mx-12 mt-8'>
        <ResultList locations={locations} showList={'hidden'} />
        <div className='lg:w-full lg:flex lg:flex-col hidden'>
          <GuestFilter
            title={'adults'}
            subtitle={'Ages 13 or above'}
            counter={adultCounter}
            incrementCounter={() => setAdultCounter((prev) => prev + 1)}
            decrementCounter={() =>
              setAdultCounter((prev) => (prev <= 0 ? 0 : prev - 1))
            }
          />
          <GuestFilter
            title={'children'}
            subtitle={'Ages 12-2'}
            margin='mt-8'
            counter={childCounter}
            incrementCounter={() => setChildCounter((prev) => prev + 1)}
            decrementCounter={() =>
              setChildCounter((prev) => (prev <= 0 ? 0 : prev - 1))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FilterDraw;
