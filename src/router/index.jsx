import { RouteConfig } from 'react-router-config';
import Home from '@pages/Home';
import HomePage from '@pages/Router/HomePage';
import Login from '@pages/Router/LoginPage';
import UserPage from '@pages/Router/UserPage';

const routes = [
  {
    path: '/',
    component: Home,
    routes: [
      // {
      //   path: '/HomePage',
      //   component: HomePage
      // },
      {
        path: '/login',
        component: Login
      },
      {
        path: '/user',
        component: UserPage
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
]

export default routes