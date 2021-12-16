import { Fragment, useState } from 'react';
import logo from '../../svg/logo.svg';

const Navbar = ({ filterOptions }) => {
  const [location, setLocation] = useState('');
  const [totalGuests, setTotalGuests] = useState();
  return (
    <div className='flex flex-col mx-4 justify-center lg:flex-row lg:justify-between lg:w-full'>
      <div className='flex w-full lg:w-auto'>
        <img src={logo} alt='logo.svg' className='py-2 px-2 lg:h-32 lg:w-32' />
      </div>
      <div className='flex justify-center lg:mt-0'>
        <div className='flex flex-col w-full mt-8 lg:mt-0 lg:flex-row lg:items-center'>
          <input
            value={location}
            type='text'
            placeholder='London'
            className='border-2 border-gray-300 py-4 px-2 capitalize focus:outline-none rounded-tr-lg rounded-tl-lg lg:py-4 lg:px-2 lg:rounded-l-2xl lg:border-2 lg:border-r-1 lg:rounded-r-none'
            onChange={({ target }) => setLocation(target.value)}
          />
          <input
            value={totalGuests}
            type='number'
            min='0'
            placeholder='add guests'
            className='border-2 border-t-0 border-gray-300 py-4 px-2 capitalize focus:outline-none rounded-br-lg rounded-bl-lg lg:py-4 lg:px-2 lg:rounded-none lg:border-2 lg:border-l-0 lg:border-r-1'
            onChange={({ target }) => setTotalGuests(target.value)}
          />
          <button
            onClick={() => filterOptions(location, totalGuests)}
            type='submit'
            className=' py-2 lg:px-2 lg:py-4 bg-red-400 relative mt-6 rounded-md lg:rounded-2xl flex justify-center items-center w-1/2 self-center lg:mt-0 lg:bg-transparent lg:border-2 lg:border-gray-300 lg:border-l-0 lg:rounded-l-none lg:bg-red-400 lg:text-white'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='h-6 w-6 mr-2 text-white'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
            <span className='text-xl text-white lg:hidden'>search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
