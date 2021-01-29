import Home from '@pages/Home';
import HomePage from '@pages/Router/HomePage';
import Login from '@pages/Router/LoginPage';
import UserPage from '@pages/Router/UserPage';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/user',
    name: 'user',
    component: UserPage
  },
]

export default routes