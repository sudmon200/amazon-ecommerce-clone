import React from 'react';
import CheckoutProduct from '../../components/CheckoutProduct';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';
import { selectCart, getCartTotal } from '../../redux/cartSlice';

import './Payment.scss';

function Payment() {
  const { user } = useSelector(selectUser);
  const { cart } = useSelector(selectCart);
  console.log(user);
  return (
    <div className='layout'>
      <div className='layout__payment'>
        <h2>Checkout Page</h2>
        <hr />
        <div className='payment__address'>
          <h3>Delivery Address</h3>
          <p>{user?.email}</p>
          <p>67, John Doe Street, Bristol, CT - 60043</p>
        </div>
        <hr />
        <div className='payment_products'>
          <h3>Review Items</h3>
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
        <hr />
        <div className='payment__method'>
          <h3>Payment Method</h3>
          <input type='number' placeholder='Card Number' />
        </div>
      </div>
    </div>
  );
}

export default Payment;
