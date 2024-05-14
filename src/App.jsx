import './App.css';
import LayoutComponent from './components/layout/Layout';
import TopLeftCorner from './components/interface/topLeftCorner/TopLeftCorner';
import Header from './components/interface/header/Header';
import Main from './components/interface/main/Main';
import LeftAside from './components/interface/leftAside/LeftAside';
import { Provider } from 'react-redux';
import { myStore } from './redux/store';

function App() {
  return (
    <Provider store={myStore}>
      <LayoutComponent >
        <div>
          <TopLeftCorner/>
        </div>

        <div>
          <Header/>
        </div>

        <div>
          <LeftAside/>
        </div>

        <div>
          <Main/>
        </div>
      </LayoutComponent>
    </Provider>
  );
}

export default App;
