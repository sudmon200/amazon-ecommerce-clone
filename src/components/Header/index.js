import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import SecondaryNav from '../SecondaryNav';
import NavShopCart from '../NavShopCart';

import './Header.scss';

function Header() {
  return (
    <header className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          alt=''
          src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'
        />
      </Link>
      <Search />
      <SecondaryNav />
      <NavShopCart />
    </header>
  );
}

export default Header;
