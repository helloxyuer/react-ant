import React from 'react';
import {Row, Col} from 'antd';
import './Header.less'

class Header extends React.Component {
  render() {
    return (
      <div className="headerBox">
        <Row>
          <Col span={12}><span>xxx后台管理系统</span></Col>
          <Col span={2} offset={8}><span>admin</span></Col>
          <Col span={2}><span>退出</span></Col>
        </Row>
        <span></span>


      </div>
    );
  }
}

export default Header;
