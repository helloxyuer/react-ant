import { Menu, Icon,Button } from 'antd';
import React from 'react';
import './NavBar.less'
const {SubMenu } = Menu;

class Index extends React.Component {
  state = {
    mode: 'inline',
    theme: 'light',
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <div className='navBarBox'>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={this.state.mode}
          theme={this.state.theme}
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="mail" />
            <span>Navigation One</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="calendar" />
            <span>Navigation Two</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Three</span>
              </span>
            }>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
            <SubMenu
              key="sub1-2"
              title={
                <span>Navigation Four</span>
              }>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="setting"/>
                <span>Navigation Four</span>
              </span>
            }>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
          </SubMenu>
        </Menu>
        <Button type="primary" onClick={this.toggleCollapsed}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
      </div>
    );
  }
}

export default Index;
