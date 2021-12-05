import logo from './svg/logo.svg';

const App = () => (
  <div className='flex flex-col lg:flex lg:justify-between lg:flex-row lg:items-center lg:mt-12 lg:mx-8 lg:flex-wrap'>
    <div className='flex w-full lg:w-auto'>
      <img src={logo} alt='logo.svg' className='py-4 px-4' />
    </div>
    <div className='flex justify-center mx-4 lg:w-1/4 lg:mt-0'>
      <div className='flex w-full shadow-lg rounded-l-2xl rounded-r-2xl mt-8 lg:mt-0'>
        <input
          type='text'
          placeholder='London'
          className=' border-2 border-r-0 border-gray=200 rounded-l-2xl py-2 px-2 text-sm w-3/4 focus:outline-none text-center capitalize'
        />
        <input
          type='number'
          max='10'
          placeholder='add guests'
          className='border-2 border-r-1 border-gray-200 py-2 px-2 text-sm w-3/4 focus:outline-none h-14 text-center capitalize appearance-none'
        />
        <button
          type='submit'
          className='border-2 border-l-0 border-gray-200 rounded-r-2xl py-2 px-2 text-sm w-1/4 relative lg:bg-white hover:bg-red-200'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='h-6 w-6 absolute text-red-500 top-4 right-4 lg:h-6 lg:w-6 lg:top-3 lg:right-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
      </div>
    </div>
    <div className='flex justify-between w-full mt-8 lg:mt-20'>
      <p className='capitalize font-bold text-black text-lg ml-6 font-montserrat'>
        stays in london
      </p>
      <p className='mr-6 text-lg'>12+ stays</p>
    </div>
  </div>
);

export default App;
