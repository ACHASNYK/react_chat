import React from 'react';
import './App.css';
import Main from './components/Main';
import Login from './components/Login';
import useAuth  from './hooks/useAuth';
import { Provider } from 'react-redux';
import store from './redux/store';

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
