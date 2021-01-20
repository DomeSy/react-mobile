import './App.less'
import { hot } from 'react-hot-loader/root'
import { PersistGate } from 'redux-persist/lib/integration/react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import _404Page from "@pages/Router/_404Page"
import HomePage from "@pages/Router/HomePage"

import 'antd-mobile/dist/antd-mobile.less'; 
import { Provider } from 'react-redux';
import configStore from './store'
const config = configStore()
import Home from '@pages/Home';

function App() {
  return (
    <Provider store={config.store}>
      <PersistGate persistor={config.persistor}>
        <div className='App'>
          <Home />
        </div>
      </PersistGate>
    </Provider>
  );
}

const AppHot = process.env.NODE_ENV === 'development' ? hot(App) : App

export default AppHot;
