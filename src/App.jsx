import './App.less'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import _404Page from "@pages/Router/_404Page"
import HomePage from "@pages/Router/HomePage"

import 'antd-mobile/dist/antd-mobile.less'; 


import Home from '@pages/Home';

function App() {
  return (
    <div className='App'>
      <Home />
    </div>
  );
}

const AppHot = process.env.NODE_ENV === 'development' ? hot(App) : App

export default AppHot;
