import Card from '../CardItem/';

const CardList = ({ data }) => {
  return (
    <div className='flex flex-col mt-8 lg:grid lg:grid-cols-3 lg:w-full lg:gap-4'>
      {data.map(({ id, superHost, title, rating, photo }) => {
        return (
          <Card
            key={id}
            superHost={superHost}
            title={title}
            rating={rating}
            photo={photo}
          />
        );
      })}
    </div>
  );
};

export default CardList;
