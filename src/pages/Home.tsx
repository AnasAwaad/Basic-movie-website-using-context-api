import axios from 'axios';
import { FormEvent, useState } from 'react';
import Card from '../components/Card';
import { IMovie } from '../interfaces';

const Home = () => {
  const [search, setSearch] = useState('');
  const [searchMovies, setSearchMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandler = async (evt?: FormEvent<HTMLFormElement>) => {
    evt?.preventDefault();
    try {
      setIsLoading(true);
      const res = await axios.get(`http://www.omdbapi.com/?apikey=b1c250a3&s=${search === '' ? 'lost' : search}`);

      setSearchMovies(res.data.Search);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   onSubmitHandler();
  // }, []);

  return (
    <div className="container mx-auto">
      <div className="w-full flex justify-center mt-10 mb-20">
        <form onSubmit={onSubmitHandler}>
          <input type="search" className="bg-red-500 w-[700px] px-4 py-3 outline-none border-none rounded-lg text-white shadow-md " value={search} onChange={(e) => setSearch(e.target.value)} />
        </form>
      </div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        searchMovies && (
          <div className="grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {searchMovies.map((item) => (
              <Card movie={item} key={item.imdbID} />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Home;
