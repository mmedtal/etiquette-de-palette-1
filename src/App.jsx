import './App.css';
import LayoutComponent from './components/layout/Layout';
import TopLeftCorner from './components/interface/topLeftCorner/TopLeftCorner';
import Header from './components/interface/header/Header';
import Main from './components/interface/main/Main';
import LeftAside from './components/interface/leftAside/LeftAside';

function App() {
  return (
    <LayoutComponent>
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
  );
}

export default App;
