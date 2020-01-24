import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom'

import { Menu } from 'antd'


class HeaderNav extends Component {
  state = {
    isOpen: false,
    animationClass: '',
    current: this.props.location.pathname,
    mode: 'inline',
    theme: 'light'
  }

  handleClick = (e) => {
    this.setState({
      current: e.key
    })
  }

  render () {
    return (
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode={this.state.mode}
          theme={this.state.theme}
        >
          <Menu.Item key="/dashboard">
            <NavLink
              className={`header-nav-link`}
              exact={true}
              to='/dashboard'
            >
              Users
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/task">
            <NavLink
              className={`header-nav-link`}
              exact={true}
              to='/task'
            >
              Task
            </NavLink>
          </Menu.Item>
        </Menu>
    )
  }
}
export default withRouter(HeaderNav)