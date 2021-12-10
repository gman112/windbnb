const GuestFilter = ({
  title,
  subtitle,
  margin,
  incrementCounter,
  decrementCounter,
  counter,
}) => {
  return (
    <div className={`flex lg:flex lg:flex-col ${margin}`}>
      <p className='font-bold capitalize'>{title}</p>
      <p className='font-light my-4 text-gray-500'>{subtitle}</p>
      <div className='lg:flex'>
        <button onClick={() => decrementCounter()}>
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
        <span>{counter}</span>
        <button onClick={() => incrementCounter()}>
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
  );
};

export default GuestFilter;
