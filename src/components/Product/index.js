import React from 'react';

import './Product.scss';

function Product() {
  return (
    <div className='product'>
      <div className='product__info'>
        OnePlus 8T 5G (Lunar Silver, 8GB RAM, 128GB Storage)
      </div>
      <div className='product__price'>₹42,999</div>
      <div className='product__rating'>
        <span role='img' aria-label='Star'>
          ⭐ ⭐ ⭐
        </span>
      </div>
      <img
        className='product__image'
        src='https://m.media-amazon.com/images/I/71CuwgwCQdL._AC_UY436_FMwebp_QL65_.jpg'
        alt=''
      />
      <button className='product__button'>Add to Cart</button>
    </div>
  );
}

export default Product;
