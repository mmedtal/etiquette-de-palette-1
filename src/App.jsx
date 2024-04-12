import logo from './logo.svg';
import './App.css';
import LayoutComponent from './components/layout/Layout';
import TopLeftCorner from './components/interface/topLeftCorner/TopLeftCorner';
import Header from './components/interface/header/Header';

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
        leftasd
      </div>

      <div>
        mn
      </div>
    </LayoutComponent>
  );
}

export default App;
