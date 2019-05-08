import React from 'react';
import {NavLink} from 'react-router-dom';
import {Menu, Icon, Button} from 'antd';
import './NavBar.less'
import menuconfig from '../../menuConfig'

const {SubMenu} = Menu;

class Index extends React.Component {
  state = {
    mode: 'inline',
    theme: 'light',
    defaultselectedKeys:['/email'],
    defaultopenKeys:['/home'],
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  componentWillMount(){
    const menuTreeNode = this.renderMenu(menuconfig);
    this.setState({
      menuTreeNode
    })
  }


  // 菜单渲染
  renderMenu =(data)=>{
    return data.map((item)=>{
      if(item.children){
        return (

          <SubMenu title={<span>{item.icon?<Icon type={item.icon}/>:''}<span>{item.title}</span></span>} key={item.key}>
            { this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
          {item.icon?<Icon type={item.icon}/>:''}
          <span><NavLink className='NavLink' to={item.key}>{item.title}</NavLink></span>
      </Menu.Item>
    })
  }

  render() {
    return (
      <div className='navBarBox'>
        <Menu
          defaultSelectedKeys={this.state.defaultselectedKeys}
          defaultOpenKeys={this.state.defaultopenKeys}
          mode={this.state.mode}
          theme={this.state.theme}
          inlineCollapsed={this.state.collapsed}
        >
          { this.state.menuTreeNode }
        </Menu>
        <Button type="primary" onClick={this.toggleCollapsed}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>
        </Button>
      </div>
    );
  }
}

export default Index;
