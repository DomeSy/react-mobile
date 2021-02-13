import Content from '@pages/Content/Content';
import _404Page from '@pages/_404';
import ListView from '@pages/ListView/ListView';
import Detail from '@pages/Detail/Detail';
import DetailShow from '@pages/DetailShow/DetailShow';


const routes = [
  {
    path: '/',
    name: 'Home',
    index: true,
    title: 'Domesy',
    // component: Detail
    component: ListView,
  },
  {
    path: '/Content',
    name: 'Content',
    component: Content
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/DetailShow',
    name: 'DetailShow',
    component: DetailShow,
  },
  {
    path: '/_404',
    name: '_404',
    miss: true,
    component: _404Page
  },
]

export default routes