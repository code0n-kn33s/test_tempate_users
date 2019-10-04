import React from 'react';
import { NavLink } from 'react-router-dom'

import { Logo } from '../../../assets/img/svg'

const HeaderLogo = () => (
  <div style={{ lineHeight: '1' }}>
    <NavLink to="/" exact>
      <Logo/>
    </NavLink>
  </div>
);

export default HeaderLogo;