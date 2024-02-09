import { Dispatch, ReactNode, createContext, useReducer } from 'react';
import { reducer } from './reducer';
import { IAction, IMovie, IState } from '../interfaces';
// import { reducer } from '../reducer';
const initialValue = {
  watchList: [],
  watched: [],
};

interface IMovieContext {
  watchList: IMovie[];
  watched: IMovie[];
  dispatch: Dispatch<IAction>;
  state: IState;
}
export const MovieContext = createContext<Partial<IMovieContext>>({});

interface IProps {
  children: ReactNode;
}

const MovieContextProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return <MovieContext.Provider value={{ dispatch, state }}>{children}</MovieContext.Provider>;
};

export default MovieContextProvider;
