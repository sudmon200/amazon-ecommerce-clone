import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function NavShopCart() {
  return (
    <div className='navShopCart'>
      <ShoppingCartOutlinedIcon fontSize='large' />
      <span className='navShopCart__textBold'>Cart</span>
    </div>
  );
}

export default NavShopCart;
