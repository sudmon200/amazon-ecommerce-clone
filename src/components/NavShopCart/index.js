import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

function NavShopCart() {
  return (
    <div className='navShopCart'>
      <Link to='/checkout'>
        <ShoppingCartOutlinedIcon style={{ fontSize: 30 }} />
        <span className='navShopCart__count'>0</span>
      </Link>
      {/* <span className='navShopCart__textBold'>Cart</span> */}
    </div>
  );
}

export default NavShopCart;
