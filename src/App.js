import React from 'react';
import './App.css';
import Main from './components/Main';
import Login from './components/Login';
import useAuth  from './services/useAuth';

function App() {

  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <Main /> : <Login/>}
    </div>
  );
}

export default App;
