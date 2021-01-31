import Home from '@pages/Home';

import { LoadAble } from '@unilts'
import HomePage from '@pages/Router/HomePage';
import Login from '@pages/Router/LoginPage';
import UserPage from '@pages/Router/UserPage';


const routes = [
  {
    path: '/',
    name: 'Home',
    index: true,
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
    component: UserPage,
    loadComponent: '@pages/Router/UserPage'
  },
]

export default routes