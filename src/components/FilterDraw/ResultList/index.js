import ResultItem from '../ResultItem';

const ResultList = ({ locations, showList, filterLocationValue }) => {
  return (
    <div className={`lg:w-full lg:flex ml-4 mt-4 ${showList}`}>
      <ul>
        {locations.map((location, index) => {
          return (
            <ResultItem
              location={location}
              key={index}
              filterLocationValue={filterLocationValue}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ResultList;
