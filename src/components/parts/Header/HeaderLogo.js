import React from 'react';
import { NavLink } from 'react-router-dom'

import { Logo } from '../../../assets/img/svg'

const HeaderLogo = () => (
  <NavLink to="/" exact>
    <Logo/>
  </NavLink>
);

export default HeaderLogo;