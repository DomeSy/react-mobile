
import routes from './router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Router } from './unilts';
import configStore from './store';

import 'antd-mobile-v2/dist/antd-mobile.less';
import './App.less'

const config = configStore()

function App() {
  return (
    <Provider store={config.store}>
      <PersistGate persistor={config.persistor}>
        <div className="App">
          <Router routes={routes} />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
