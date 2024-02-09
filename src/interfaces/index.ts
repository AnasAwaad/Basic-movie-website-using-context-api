// export interface IMovie {
//   adult: boolean;
//   backdrop_path: string;
//   genre_ids: number[];
//   id: number;
//   original_language: string;
//   original_title: string;
//   overview: string;
//   popularity: number;
//   poster_path: string;
//   release_date: string;
//   title: string;
//   video: boolean;
//   vote_average: number;
//   vote_count: number;
// }

import { REDUCER_ACTION_TYPE } from '../Context/reducer';

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
