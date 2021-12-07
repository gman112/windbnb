const ResultBanner = ({ results }) => {
  return (
    <div className='flex justify-between w-full mt-8 lg:mt-20 items-center'>
      <p className='capitalize font-extrabold	text-lg ml-4 font-montserrat'>
        trending stays
      </p>
      <p className='mr-4 font-light text-sm'>
        {results > 10 ? `10+` : results}
      </p>
    </div>
  );
};

export default ResultBanner;
