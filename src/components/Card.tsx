import { useContext } from 'react';
import { IMovie } from '../interfaces';
import { MovieContext } from '../Context/MovieContext';
import { REDUCER_ACTION_TYPE } from '../Context/reducer';
import './Card.css';

interface IProps {
  movie: IMovie;
}

const Card = ({ movie }: IProps) => {
  const { dispatch } = useContext(MovieContext);

  const addToWatchListHandler = () => {
    // With Typescript 3.7+, you can also use optional chaining to invoke the optional prop method or make a condition on dispatch such as
    // if(dispatch){
    // dispatch?.({ type: REDUCER_ACTION_TYPE.ADD_TO_WATCHLIST, payload: movie });
    // }
    dispatch?.({ type: REDUCER_ACTION_TYPE.ADD_TO_WATCHLIST, payload: movie });
  };

  const addToWatchedHandler = () => {
    // With Typescript 3.7+, you can also use optional chaining to invoke the optional prop method
    dispatch?.({ type: REDUCER_ACTION_TYPE.ADD_TO_WATCHED, payload: movie });
  };
  return (
    <div className="relative card ">
      <div className="absolute top-0 left-0 w-full h-full hover:bg-[#0000007a] bg-transparent">
        <div className="absolute bottom-5  items-center justify-center flex-wrap sm:flex-col md:flex-row gap-4 w-full hidden activebtn ">
          <button onClick={addToWatchListHandler} className="bg-white rounded-md text-black px-4 py-2 font-semibold hover:bg-gray-400 transition-all duration-200">
            Add to wachList
          </button>
          <button onClick={addToWatchedHandler} className="bg-white rounded-md text-black px-4 py-2 font-semibold hover:bg-gray-400 transition-all duration-200">
            Add to watched
          </button>
        </div>
      </div>
      <div className="w-full h-full">
        <img src={movie.Poster} className="w-full h-full" />
      </div>
    </div>
  );
};
export default Card;
