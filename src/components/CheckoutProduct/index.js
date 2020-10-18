import React from 'react';

import './CheckoutProduct.scss';

function CheckoutProduct({ id, info, price, image, ratings }) {
  return (
    <div className='checkoutProduct'>
      <div className='checkoutProduct__image'>
        <img src={image} alt='' />
      </div>
      <div className='checkoutProduct__wrapper'>
        <div className='checkoutProduct__info'>{info}</div>
        <div className='checkoutProduct__rating'>
          {Array(ratings)
            .fill()
            .map((_, i) => (
              <span key={i} role='img' aria-label='Star'>
                ⭐
              </span>
            ))}
        </div>
        <button className='checkoutProduct__button'>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
