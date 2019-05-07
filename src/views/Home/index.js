import React from 'react';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div className="mainBox">
      <NavBar/>
      <div className="contentBox">
        <Header/>
        <div className='mainBox'>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
