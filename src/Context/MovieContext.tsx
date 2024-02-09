import { ReactNode, createContext, useEffect, useReducer } from 'react';
import { reducer } from './reducer';
import { IMovieContext } from '../interfaces';

export const MovieContext = createContext<Partial<IMovieContext>>({});

interface IProps {
  children: ReactNode;
}

const initialValue = {
  watchList: localStorage.getItem('watchList') ? JSON.parse(localStorage.getItem('watchList') ?? '') : [],
  watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched') ?? '') : [],
};

const MovieContextProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(state.watchList));
    localStorage.setItem('watched', JSON.stringify(state.watched));
  }, [state]);

  return <MovieContext.Provider value={{ dispatch, state }}>{children}</MovieContext.Provider>;
};

export default MovieContextProvider;
