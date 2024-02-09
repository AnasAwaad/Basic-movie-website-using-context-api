import { IAction, IState } from '../interfaces';

export enum REDUCER_ACTION_TYPE {
  ADD_TO_WATCHLIST,
  ADD_TO_WATCHED,
  MOVE_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
  MOVE_TO_WATCHED,
  REMOVE_FROM_WATCHED,
}

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD_TO_WATCHLIST: {
      const wachListFound = state.watchList.find((item) => item.imdbID === action.payload?.imdbID);
      const watchedFound = state.watched.find((item) => item.imdbID === action.payload.imdbID);
      if (wachListFound || watchedFound) {
        return state;
      }
      return { ...state, watchList: [...state.watchList, action.payload] };
    }

    case REDUCER_ACTION_TYPE.ADD_TO_WATCHED: {
      const wachedFound = state.watched.find((item) => item.imdbID === action.payload?.imdbID);
      const watchList = state.watchList.filter((item) => item.imdbID != action.payload?.imdbID);
      if (wachedFound) {
        return state;
      }
      return { watchList, watched: [...state.watched, action.payload] };
    }

    case REDUCER_ACTION_TYPE.MOVE_TO_WATCHED: {
      const watchList = state.watchList.filter((movie) => movie.imdbID != action.payload.imdbID);
      const watched = [...state.watched, action.payload];
      return { watchList, watched };
    }

    case REDUCER_ACTION_TYPE.MOVE_TO_WATCHLIST: {
      const watched = state.watched.filter((movie) => movie.imdbID != action.payload.imdbID);
      const watchList = [...state.watchList, action.payload];
      return { watchList, watched };
    }

    case REDUCER_ACTION_TYPE.REMOVE_FROM_WATCHED: {
      const watched = state.watched.filter((movie) => movie.imdbID != action.payload.imdbID);
      return { ...state, watched: watched };
    }

    case REDUCER_ACTION_TYPE.REMOVE_FROM_WATCHLIST: {
      const watchList = state.watchList.filter((movie) => movie.imdbID != action.payload.imdbID);
      return { ...state, watchList: watchList };
    }

    default:
      throw new Error();
  }
};
