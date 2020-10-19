import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cartSlice';

import './CheckoutProduct.scss';

function CheckoutProduct({ uuid, info, price, image, ratings }) {
  const dispatch = useDispatch();
  const removeItemFromCart = () => {
    console.log('removeItemFromCart');
    dispatch(
      removeFromCart({
        uuid: uuid,
      })
    );
  };
  return (
    <div className='checkoutProduct'>
      <div className='checkoutProduct__image'>
        <img src={image} alt='' />
      </div>
      <div className='checkoutProduct__wrapper'>
        <div className='checkoutProduct__info'>{info}</div>
        <div className='checkoutProduct__price'>
          <CurrencyFormat
            renderText={(value) => <>{value}</>}
            decimalScale={2}
            value={price}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₹'}
          />
        </div>
        <div className='checkoutProduct__rating'>
          {Array(ratings)
            .fill()
            .map((_, i) => (
              <span key={i} role='img' aria-label='Star'>
                ⭐
              </span>
            ))}
        </div>
        <button
          className='checkoutProduct__button'
          onClick={removeItemFromCart}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
