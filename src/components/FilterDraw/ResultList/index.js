import ResultItem from '../ResultItem';

const ResultList = ({ locations, showList }) => {
  return (
    <div className={`lg:w-full lg:flex ml-4 mt-4 ${showList}`}>
      <ul>
        {locations.map((location, index) => {
          return <ResultItem location={location} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default ResultList;
