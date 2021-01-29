import './App.less'
import { hot } from 'react-hot-loader/root'
import { PersistGate } from 'redux-persist/lib/integration/react';

import 'antd-mobile/dist/antd-mobile.less'; 
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import routes from './router';
import configStore from './store'
const config = configStore()
import Home from '@pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Provider store={config.store}>
        <PersistGate persistor={config.persistor}>
          <div className='App'>
            <Home />
          </div>
          {/* {renderRoutes(routes)} */}
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

const AppHot = process.env.NODE_ENV === 'development' ? hot(App) : App

export default AppHot;
