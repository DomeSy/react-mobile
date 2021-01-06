import './App.less'
import { hot } from 'react-hot-loader/root'
import { arr } from '@components/index'

function App() {
  return (
    <div className="App">
      好好
      <div>{arr}</div>
    </div>
  );
}

const AppHot = process.env.NODE_ENV === 'development' ? hot(App) : App

export default AppHot;
