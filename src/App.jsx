import './App.css';
import LayoutComponent from './components/layout/Layout';
import TopLeftCorner from './components/interface/topLeftCorner/TopLeftCorner';
import Header from './components/interface/header/Header';
import Main from './components/interface/main/Main';
import LeftAside from './components/interface/leftAside/LeftAside';
import { Provider } from 'react-redux';
import { myStore } from './redux/store';
import { useEffect } from 'react';

function App() {


  useEffect(()=>{
    //console.log("the screen width is : " +window.screen.width)
    //console.log("the screen height is : " +window.screen.height)

    console.log("the devicePixelRatio: " +window.devicePixelRatio)

  },[])

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
