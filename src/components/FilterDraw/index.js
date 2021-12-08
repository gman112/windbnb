const FilterDraw = ({ toggleNavbar, locations }) => {
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
        <div className='lg:w-full'>
          <ul className=''>
            {locations.map((location) => {
              return (
                <li className='flex font-mulish font-lighter lg:items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 mr-2 ml-4 text-gray-500'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                  <button className='text-sm my-4'>{location}, Britain</button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='lg:w-full lg:flex lg:flex-col'>
          <div className='flex lg:flex lg:flex-col'>
            <p className='font-bold capitalize'>adults</p>
            <p className='font-light my-4'>Ages 13 or above</p>
            <div className='lg:flex'>
              <button>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 border-2 border-gray-200 rounded-sm mr-2 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M20 12H4'
                  />
                </svg>
              </button>
              <span>0</span>
              <button>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 border-2 border-gray-200 rounded-sm ml-2 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 4v16m8-8H4'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='flex lg:flex lg:flex-col mt-8'>
            <p className='font-bold capitalize'>children</p>
            <p className='font-light my-4'>Ages 12-2</p>
            <div className='lg:flex'>
              <button>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 border-2 border-gray-200 rounded-sm mr-2 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M20 12H4'
                  />
                </svg>
              </button>
              <span>0</span>
              <button>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 border-2 border-gray-200 rounded-sm ml-2 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 4v16m8-8H4'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterDraw;
