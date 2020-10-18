import React from 'react';
import Subtotal from '../../components/Subtotal';

import './Checkout.scss';

function Checkout() {
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
          </div>
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
