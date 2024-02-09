import { IAction, IState } from '../interfaces';

export enum REDUCER_ACTION_TYPE {
  ADD_TO_WATCHLIST,
  ADD_TO_WATCHED,
}

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD_TO_WATCHLIST: {
      const wachListFound = state.watchList.find((item) => item.imdbID === action.payload?.imdbID);
      if (wachListFound) {
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

    default:
      throw new Error();
  }
};
