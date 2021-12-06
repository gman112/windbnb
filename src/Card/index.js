const Card = ({ photo, superHost, title, rating }) => {
  return (
    <div className='flex flex-col mx-2 my-8'>
      <img
        src={photo}
        alt='home.jpg'
        className='object-cover rounded-xl h-60'
      />
      <div className='flex items-center justify-between w-full mt-2'>
        {/* super host */}
        {superHost && (
          <p className='border-2 rounded-xl border-gray-500 text-xs text-center font-semibold p-1'>
            super host
          </p>
        )}
        {/* apartment title */}
        <p
          className={
            superHost
              ? 'text-sm truncate w-3/5 text-center'
              : 'text-sm truncate'
          }
        >
          {title}
        </p>
        {/* apartment rating */}
        <p className='flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4 fill-current text-red-500 ml-2'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
            />
          </svg>
          <span className='text-sm ml-2'>{rating.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
