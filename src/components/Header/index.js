import React from 'react';
import Search from '../Search';
import SecondaryNav from '../SecondaryNav';
import NavShopCart from '../NavShopCart';

import './Header.scss';

function Header() {
  return (
    <header className='header'>
      <div>
        <img
          className='header__logo'
          alt=''
          src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'
        />
      </div>
      <Search />
      <SecondaryNav />
      <NavShopCart />
    </header>
  );
}

export default Header;
