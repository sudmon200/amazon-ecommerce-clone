import React from 'react';
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from '../../components/CheckoutProduct';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';
import { selectCart, getCartTotal } from '../../redux/cartSlice';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import './Payment.scss';

function Payment() {
  const { user } = useSelector(selectUser);
  const { cart } = useSelector(selectCart);
  const subTotal = getCartTotal(cart);

  const stripe = useStripe();
  const elements = useElements();

  const itemCount = cart?.length;

  return (
    <div className='layout'>
      <div className='layout__payment'>
        <h2>
          Checkout <span>({!itemCount > 0 ? 0 : itemCount} items)</span>
        </h2>
        <hr />
        <div className='payment__address'>
          <h3>Delivery Address</h3>
          <div className='payment__addressWrap'>
            <p>{user?.email}</p>
            <p>67, John Doe Street</p>
            <p>Bristol, CT - 60043</p>
          </div>
        </div>
        <hr />
        <div className='payment_products'>
          <h3>Review Items</h3>
          <div className='payment_productsWrap'>
            {cart.map((item) => (
              <CheckoutProduct
                key={item.uuid}
                uuid={item.uuid}
                productId={item.productId}
                info={item.info}
                price={item.price}
                image={item.image}
                ratings={item.ratings}
              />
            ))}
          </div>
        </div>
        <hr />
        <div className='payment__method'>
          <h3>Payment Method</h3>
          <div className='payment__methodWrap'>
            <form>
              <CardElement />
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <h3>Order Total: {value}</h3>
                  </>
                )}
                decimalScale={2}
                value={subTotal}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₹'}
              />
              <button classname='button__primary'>Buy Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
