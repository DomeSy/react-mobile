import './App.less'
import { hot } from 'react-hot-loader/root'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import routes from './router';
import configStore from './store';
import Home from '@pages/Home';
import { Router } from './unilts';

import 'antd-mobile/dist/antd-mobile.less'; 

const config = configStore()

// const Routers = new Router()

function App() {

  // console.log(routes, '001', Routers)
  return (
    <Provider store={config.store}>
      <PersistGate persistor={config.persistor}>
        <div className='App'>
          {/* <Home /> */}
          <Router routes={routes} />
        </div>
      </PersistGate>
    </Provider>
  );
}

const AppHot = process.env.NODE_ENV === 'development' ? hot(App) : App

export default AppHot;
