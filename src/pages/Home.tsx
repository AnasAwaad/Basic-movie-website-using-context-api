import axios from 'axios';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import Card from '../components/Card';
import { IMovie } from '../interfaces';
import { MovieContext } from '../Context/MovieContext';
import { REDUCER_ACTION_TYPE } from '../Context/reducer';
import Button from '../components/ui/Button';

const Home = () => {
  const [search, setSearch] = useState('');
  const [searchMovies, setSearchMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { dispatch } = useContext(MovieContext);

  const onSubmitHandler = async (evt?: FormEvent<HTMLFormElement>) => {
    evt?.preventDefault();
    try {
      setIsLoading(false);
      const res = await axios.get(`http://www.omdbapi.com/?apikey=b1c250a3&s=${search === '' ? 'lost' : search}`);
      setError(res.data.Error);
      setSearchMovies(res.data.Search);
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
  };

  const addToWatchListHandler = (movie: IMovie) => {
    // With Typescript 3.7+, you can also use optional chaining to invoke the optional prop method or make a condition on dispatch such as
    // if(dispatch){
    // dispatch?.({ type: REDUCER_ACTION_TYPE.ADD_TO_WATCHLIST, payload: movie });
    // }
    dispatch?.({ type: REDUCER_ACTION_TYPE.ADD_TO_WATCHLIST, payload: movie });
  };

  const addToWatchedHandler = (movie: IMovie) => {
    dispatch?.({ type: REDUCER_ACTION_TYPE.ADD_TO_WATCHED, payload: movie });
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  if (error) {
    console.log(error);

    return <h2 className="flex justify-center px-2 text-xl md:text-4xl font-bold text-gray-600">there is too many Movies , search for another movie ...</h2>;
  }

  return (
    <div className="container mx-auto my-20">
      <div className="w-full flex justify-center mt-10 mb-20">
        <form onSubmit={onSubmitHandler}>
          <input
            type="search"
            placeholder="search for movie..."
            className="bg-gray-800 w-[300px] sm:w-[400px] md:w-[700px] px-4 py-3 outline-none border-none rounded-lg text-white shadow-md "
            value={search}
            onChange={onChangeHandler}
          />
        </form>
      </div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : searchMovies.length > 0 ? (
        searchMovies && (
          <div className="grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {searchMovies.map((item) => (
              <Card movie={item} key={item.imdbID}>
                <Button onClick={() => addToWatchListHandler(item)}>Add to wachList</Button>
                <Button onClick={() => addToWatchedHandler(item)}>Add to watched</Button>
              </Card>
            ))}
          </div>
        )
      ) : (
        <h2 className="flex justify-center px-2 text-xl md:text-4xl font-bold text-gray-600">there is no Movies , search for your movie ...</h2>
      )}
    </div>
  );
};

export default Home;
