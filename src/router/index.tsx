import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import Watched from '../pages/Watched';
import WatchList from '../pages/WatchList';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <h2>Something went wrong</h2>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'watched',
        element: <Watched />,
      },
      {
        path: 'watchList',
        element: <WatchList />,
      },
    ],
  },
]);
