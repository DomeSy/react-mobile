import Home from '@pages/Home';
import Content from '@pages/Content/Content';
import UserPage from '@pages/Router/UserPage';
import _404Page from '@pages/_404';
import ListView from '@pages/ListView/ListView';


const routes = [
  {
    path: '/',
    name: 'Home',
    index: true,
    title: '烈璇',
    component: Home
  },
  {
    path: '/Content',
    name: 'Content',
    component: Content
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