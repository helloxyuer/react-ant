import React from 'react';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
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
}

export default Home;
