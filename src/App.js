import './App.less'
import { hot } from 'react-hot-loader/root'
import Home from './pages/Home';

function App() {
  return <Home />;
}

const AppHot = process.env.NODE_ENV === 'development' ? hot(App) : App

export default AppHot;
