import React from 'react';
import logo from './logo.svg';
import NavBar from './components/navBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
