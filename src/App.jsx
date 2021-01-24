import './App.less'
import { hot } from 'react-hot-loader/root'
import { PersistGate } from 'redux-persist/lib/integration/react';

import 'antd-mobile/dist/antd-mobile.less'; 
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import routes from './router';
import configStore from './store'
const config = configStore()
import Home from '@pages/Home';

function App() {
  return (
    <HashRouter>
      <Provider store={config.store}>
        <PersistGate persistor={config.persistor}>
          {/* <div className='App'>
            <Home />
          </div> */}
          {renderRoutes(routes)}
        </PersistGate>
      </Provider>
    </HashRouter>
  );
}

const AppHot = process.env.NODE_ENV === 'development' ? hot(App) : App

export default AppHot;
