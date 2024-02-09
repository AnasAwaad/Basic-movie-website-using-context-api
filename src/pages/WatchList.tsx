import { useContext } from 'react';
import { MovieContext } from '../Context/MovieContext';
import Card from '../components/Card';

const Watched = () => {
  const { state } = useContext(MovieContext);
  const watchList = state?.watchList;

  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 container mx-auto">
      {watchList?.map((item) => (
        <Card key={item.imdbID} movie={item} />
      ))}
    </div>
  );
};

export default Watched;