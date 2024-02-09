import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './App.css';
import './index.css';
import MovieContextProvider from './Context/MovieContext';

const App = () => {
  return (
    <MovieContextProvider>
      <RouterProvider router={router} />
    </MovieContextProvider>
  );
};

export default App;
