import React from 'react';
import Header from '../../components/Header';

class Content extends React.Component {
  render() {
    return (
      <div className="mainBox">
        <Header/>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Content;
