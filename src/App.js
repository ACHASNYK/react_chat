import React from 'react';
import './App.css';
import Main from './components/Main';
import Login from './components/Login/Login';
import useAuth  from './hooks/useAuth';
import { Provider } from 'react-redux';
import store from './redux/store';
import { useMediaQuery } from 'react-responsive';
import MLogin from './components/MUsers/Mlogin';


function App() {
const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const { user } = useAuth();
  const alt = JSON.parse(sessionStorage.getItem('login'))
  return (
    <Provider store={store}>
      <div className="App">
        {isBigScreen && (user || alt) ? <Main />
          : isBigScreen && !user && !alt ? <Login />
            : isTabletOrMobile && (user || alt) ? <Main />
              : isTabletOrMobile && !user && !alt ? <MLogin /> : null}
        
      </div>
    </Provider>
  );
}

export default App;
