import { useContext } from 'react';
import { MovieContext } from '../Context/MovieContext';
import Card from '../components/Card';
import { IMovie } from '../interfaces';
import { REDUCER_ACTION_TYPE } from '../Context/reducer';
import Button from '../components/ui/Button';

const WatchList = () => {
  const { state, dispatch } = useContext(MovieContext);
  const watchList = state?.watchList;

  const moveToWatched = (movie: IMovie) => {
    dispatch?.({ type: REDUCER_ACTION_TYPE.MOVE_TO_WATCHED, payload: movie });
  };
  const removeFromWatchList = (movie: IMovie) => {
    dispatch?.({ type: REDUCER_ACTION_TYPE.REMOVE_FROM_WATCHLIST, payload: movie });
  };
  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 container mx-auto">
      {watchList?.map((item) => (
        <Card key={item.imdbID} movie={item}>
          <Button onClick={() => moveToWatched(item)}>move to watched</Button>
          <Button onClick={() => removeFromWatchList(item)}>remove from watchList</Button>
        </Card>
      ))}
    </div>
  );
};

export default WatchList;
