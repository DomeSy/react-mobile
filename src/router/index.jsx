import Home from '@pages/Home';

import { LoadAble } from '@unilts'
import HomePage from '@pages/Router/HomePage';
import Login from '@pages/Router/LoginPage';
import UserPage from '@pages/Router/UserPage';
import _404Page from '@pages/_404';


const routes = [
  {
    path: '/',
    name: 'Home',
    index: true,
    title: '烈璇',
    component: Home
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
  },{
    path: '/_404',
    name: '_404',
    miss: true,
    component: _404Page
  },
]

export default routes