import { Dispatch } from 'react';
import { REDUCER_ACTION_TYPE } from '../Context/reducer';

export interface IHomeState {
  search: string;
  searchMovies: IMovie[];
  isLoading: boolean;
}

export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IState {
  watchList: IMovie[];
  watched: IMovie[];
}

export interface IAction {
  type: REDUCER_ACTION_TYPE;
  payload: IMovie;
}

export interface IMovieContext {
  watchList: IMovie[];
  watched: IMovie[];
  dispatch: Dispatch<IAction>;
  state: IState;
}
