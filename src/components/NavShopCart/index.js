import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCart } from '../../redux/cartSlice';

function NavShopCart() {
  const { cart } = useSelector(selectCart);
  return (
    <div className='navShopCart'>
      <Link to='/checkout'>
        <ShoppingCartOutlinedIcon style={{ fontSize: 30 }} />
        <span className='navShopCart__count'>{cart?.length}</span>
      </Link>
    </div>
  );
}

export default NavShopCart;
