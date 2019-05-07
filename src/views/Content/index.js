import React from 'react';
import Header from '../../components/Header';

function Content() {
  return (
    <div className="mainBox">
      <Header/>
      <div>
        {this.props.children}
      </div>
    </div>
  );
}

export default Content;
