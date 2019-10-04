import React from 'react';

import { Facebook, Instagram, Telegram } from './../../../assets/img/svg'

const SocIcons = () => (
  <div className="soc-icons">
    <a className="icon" href="https://instagram.com">
      <Instagram className="instagram-icon" />
    </a>
    <a className="icon" href="https://t.me/">
      <Telegram className="twitter-icon" />
    </a>
    <a className="icon" href="https://m.facebook.com/">
      <Facebook className="facebook-icon" />
    </a>
  </div>
);

export default SocIcons;