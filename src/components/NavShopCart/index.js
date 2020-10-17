import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function NavShopCart() {
  return (
    <div className='navShopCart'>
      <ShoppingCartOutlinedIcon style={{ fontSize: 30 }} />
      <span className='navShopCart__count'>0</span>
      {/* <span className='navShopCart__textBold'>Cart</span> */}
    </div>
  );
}

export default NavShopCart;
