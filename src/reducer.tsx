export const initialState = 0;

export const reducer = (accumaluter: number, action: string) => {
  switch (action) {
    case 'increment':
      return accumaluter + 1;
    case 'decrement':
      return accumaluter - 1;
    case 'reset':
      return initialState;

    default:
      return accumaluter;
  }
};
