import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

import './Product.scss';

function Product({ id, info, price, image, ratings }) {
  const dispatch = useDispatch();
  const addItemToCart = () => {
    console.log('lets distpatch');
    dispatch(
      addToCart({
        cart: {
          id: id,
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
      <div className='product__price'>{price}</div>
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
