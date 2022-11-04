import { createBrowserRouter } from 'react-router-dom';
import Home from '../layouts/Home';
import Main from '../layouts/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [{ path: '/home', element: <Home /> }],
  },
]);

export default router;
