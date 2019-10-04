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
          <Menu.Item key="/">
            <NavLink
              className={`header-nav-link`}
              exact={true}
              to='/'
            >
              Get Users
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/not_found">
            <NavLink
              className={`header-nav-link`}
              exact={true}
              to='/not_found'
            >
              404
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/help">
            <NavLink
              className={`header-nav-link`}
              exact={true}
              to='/help'
            >
              Help
            </NavLink>
          </Menu.Item>
        </Menu>
    )
  }
}
export default withRouter(HeaderNav)