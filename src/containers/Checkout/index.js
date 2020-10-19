import React from 'react';
import Subtotal from '../../components/Subtotal';
import CheckoutProduct from '../../components/CheckoutProduct';
import { useSelector } from 'react-redux';
import { selectCart, getCartTotal } from '../../redux/cartSlice';

import './Checkout.scss';

function Checkout() {
  const { cart } = useSelector(selectCart);
  const itemCount = cart?.length;
  const subTotal = getCartTotal(cart);

  return (
    <div className='layout'>
      <div className='layout__checkout'>
        <div className='layoutCheckout__bannerAd'>
          <img
            src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Jupiter-P1/bank_stripe_pc_day-of_Phase13.jpg'
            alt=''
          />
        </div>
        <div className='layoutCheckout__wrapper'>
          <div className='layoutCheckout__cartlist'>
            <h2>Your Shoppping Cart</h2>
            {!itemCount > 0 ? (
              <h4>
                Your shoppping cart is empty, please add items to the cart!
              </h4>
            ) : (
              cart.map((item) => (
                <CheckoutProduct
                  key={item.uuid}
                  uuid={item.uuid}
                  productId={item.productId}
                  info={item.info}
                  price={item.price}
                  image={item.image}
                  ratings={item.ratings}
                />
              ))
            )}
          </div>
          <Subtotal productCount={itemCount} subTotal={subTotal} />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
