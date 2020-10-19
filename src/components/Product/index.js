import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import CurrencyFormat from 'react-currency-format';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

import './Product.scss';

function Product({ productId, info, price, image, ratings }) {
  const dispatch = useDispatch();
  const addItemToCart = () => {
    dispatch(
      addToCart({
        cart: {
          uuid: uuidv4(),
          productId: productId,
          info: info,
          price: price,
          image: image,
          ratings: ratings,
        },
      })
    );
  };

  return (
    <div className='product'>
      <div className='product__info'>{info}</div>
      <div className='product__price'>
        <CurrencyFormat
          renderText={(value) => <>{value}</>}
          decimalScale={2}
          value={price}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'₹'}
        />
      </div>
      <div className='product__rating'>
        {Array(ratings)
          .fill()
          .map((_, i) => (
            <span key={i} role='img' aria-label='Star'>
              ⭐
            </span>
          ))}
      </div>
      <img className='product__image' src={image} alt='' />
      <button className='product__button' onClick={addItemToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
