import { useContext } from 'react';
import { MovieContext } from '../Context/MovieContext';
import Card from '../components/Card';
import { IMovie } from '../interfaces';
import { REDUCER_ACTION_TYPE } from '../Context/reducer';
import Button from '../components/ui/Button';

const Watched = () => {
  const { state, dispatch } = useContext(MovieContext);
  const watched = state?.watched;

  const moveToWatchList = (movie: IMovie) => {
    dispatch?.({ type: REDUCER_ACTION_TYPE.MOVE_TO_WATCHLIST, payload: movie });
  };
  const removeFromWatched = (movie: IMovie) => {
    dispatch?.({ type: REDUCER_ACTION_TYPE.REMOVE_FROM_WATCHED, payload: movie });
  };
  return (
    <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 container mx-auto">
      {watched?.map((item) => (
        <Card key={item.imdbID} movie={item}>
          <Button onClick={() => moveToWatchList(item)}>move to watchList</Button>
          <Button onClick={() => removeFromWatched(item)}>remove from watched</Button>
        </Card>
      ))}
    </div>
  );
};

export default Watched;
