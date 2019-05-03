import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.less';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="contentBox">
        <Header></Header>
        <div className='mainBox'>content</div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
