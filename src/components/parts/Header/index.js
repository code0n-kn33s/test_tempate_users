import React from 'react'

import HeaderNav from './HeaderNav'
import SocIcons from './HeaderSoc'

class Header extends React.Component {
  render () {
    return (
      <div className="header">
        <div className="header-nav">
          <HeaderNav/>
        </div>
        <div className="header-soc">
          <SocIcons/>
          <div className="header-soc-link">
            <a href="https://habr.com/ru/">
              For reading...
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
