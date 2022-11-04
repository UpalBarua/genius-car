import { createBrowserRouter } from 'react-router-dom';
import SignUp from '../components/SignUp/SignUp';
import Home from '../layouts/Home';
import Main from '../layouts/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/signup', element: <SignUp /> },
    ],
  },
]);

export default router;
