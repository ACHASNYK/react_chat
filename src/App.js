import React from 'react';
import './App.css';
import Main from './components/Main';
import Login from './components/Login';
import useAuth  from './services/useAuth';

function App() {

  const { user } = useAuth();
  const alt = JSON.parse(sessionStorage.getItem('login'))
  return (
    <div className="App">
      {user||alt? <Main /> : <Login/>}
    </div>
  );
}

export default App;
