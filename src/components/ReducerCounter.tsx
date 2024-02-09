import { useReducer } from 'react';
// import { initialState, reducer } from '../reducer';

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const RESET = 'reset';
const INCREMENT2 = 'increment2';
const DECREMENT2 = 'decrement2';
const RESET2 = 'reset2';

interface IState {
  firstCount: number;
  secondCount: number;
}

interface IAction {
  type: string;
  value?: number;
}

const reducer = (state: IState, action: IAction) => {
  const { type, value } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, firstCount: state.firstCount + (value || 0) };
    case DECREMENT:
      return { ...state, firstCount: state.firstCount - (value || 0) };
    case RESET:
      return { ...state, firstCount: 0 };
    case INCREMENT2:
      return { ...state, secondCount: state.secondCount + (value || 0) };
    case DECREMENT2:
      return { ...state, secondCount: state.secondCount - (value || 0) };
    case RESET2:
      return { ...state, secondCount: 0 };
    default:
      return { firstCount: 0, secondCount: 0 };
  }
};

const ReducerCounter = () => {
  const [newState, dispatch] = useReducer(reducer, { firstCount: 0, secondCount: 0 });

  return (
    <>
      <h1>count : {newState.firstCount}</h1>
      <button onClick={() => dispatch({ type: INCREMENT, value: 1 })}>increment</button>
      <button onClick={() => dispatch({ type: DECREMENT, value: 1 })}>Decrement</button>
      <button onClick={() => dispatch({ type: RESET })}>reset</button>

      <h1>count : {newState.secondCount}</h1>
      <button onClick={() => dispatch({ type: INCREMENT2, value: 1 })}>increment</button>
      <button onClick={() => dispatch({ type: DECREMENT2, value: 1 })}>Decrement</button>
      <button onClick={() => dispatch({ type: RESET2 })}>reset</button>
    </>
  );
};

export default ReducerCounter;
