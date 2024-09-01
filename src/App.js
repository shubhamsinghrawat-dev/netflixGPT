import { Provider } from 'react-redux';
import './App.css';
import Body from "./components/Body"
import appStore from './utils/appStore';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
