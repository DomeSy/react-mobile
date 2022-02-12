import React from 'react';
import { Provider } from 'react-redux'
import './App.less';
import Router from './utils/Router';
import models from './models'
import dva from './utils/dva'
import routes from './router';

const app = dva.createApp({
  models,
})

const store = app.getStore()

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <div className="App">
        
        <Router routes={routes} />
      </div>
    </Provider>
  );
};

export default App;
