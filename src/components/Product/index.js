import React from 'react';

import './Product.scss';

function Product({ info, price, img, ratings }) {
  return (
    <div className='product'>
      <div className='product__info'>{info}</div>
      <div className='product__price'>{price}</div>
      <div className='product__rating'>
        {Array(ratings)
          .fill()
          .map((_, i) => (
            <span role='img' aria-label='Star'>
              ⭐
            </span>
          ))}
      </div>
      <img className='product__image' src={img} alt='' />
      <button className='product__button'>Add to Cart</button>
    </div>
  );
}

export default Product;
