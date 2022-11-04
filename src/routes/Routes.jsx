import { createBrowserRouter } from 'react-router-dom';
import SignUp from '../components/SignUp/SignUp';
import Login from '../components/Login/Login';
import Home from '../layouts/Home';
import Main from '../layouts/Main';
import NotFound from '../components/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/login', element: <Login /> },
    ],
  },
  { path: '*', element: <NotFound /> },
]);

export default router;
