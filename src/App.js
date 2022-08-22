import React from 'react';
import './App.css';
import Main from './components/Main';
import Login from './components/Login';
import useAuth  from './services/useAuth';
import { Provider } from 'react-redux';
import store from './services/store';

function App() {

  const { user } = useAuth();
  const alt = JSON.parse(sessionStorage.getItem('login'))
  return (
    <Provider store={store}>
      <div className="App">
        {user||alt? <Main /> : <Login/>}
      </div>
    </Provider>
  );
}

export default App;
