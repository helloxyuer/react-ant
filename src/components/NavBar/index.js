import React from 'react';
import {NavLink} from 'react-router-dom';
import {Menu, Icon, Button} from 'antd';
import './NavBar.less'

const {SubMenu} = Menu;

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
          <Menu.Item
            key="sub1">
            <Icon type="mail"/>
            <span>
              <NavLink to="/login">我的邮箱</NavLink>
            </span>
          </Menu.Item>
          <Menu.Item
            key="sub2">
            <Icon type="calendar"/>
            <span>
              <NavLink to="/login">我的日历</NavLink>
            </span>
          </Menu.Item>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="appstore"/>
                <NavLink to="/home">我的商店</NavLink>
              </span>
            }>
            <Menu.Item key="sub3-1">
              <NavLink to="/home/homepage1">我的订单</NavLink>
            </Menu.Item>
            <Menu.Item key="sub3-2">
              <NavLink to="/home/homepage2">我的商品</NavLink>
            </Menu.Item>
            <Menu.Item key="sub3-3">
              <NavLink to="/home/homepage3">我的账单</NavLink>
            </Menu.Item>
            <SubMenu
              key="sub3-4"
              title={
                <span>商店消息</span>
              }>
              <Menu.Item key="sub3-4-1">
                <NavLink to="/home/homepage4">我的投诉</NavLink>
              </Menu.Item>
              <Menu.Item key="sub3-4-2">
                <NavLink to="/home/homepage5">我的建议</NavLink>
              </Menu.Item>
              <Menu.Item key="sub3-4-3">
                <NavLink to="/home/homepage6">我的评价</NavLink>
              </Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="setting"/>
                <span>我的伙伴</span>
              </span>
            }>
            <Menu.Item key="sub4-1">Option 7</Menu.Item>
            <Menu.Item key="sub4-2">Option 8</Menu.Item>
            <Menu.Item key="sub4-3">Option 9</Menu.Item>
            <Menu.Item key="sub4-4">Option 10</Menu.Item>
          </SubMenu>
        </Menu>
        <Button type="primary" onClick={this.toggleCollapsed}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>
        </Button>
      </div>
    );
  }
}

export default Index;
