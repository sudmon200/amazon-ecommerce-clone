import React from 'react';

import './Subtotal.scss';

function Subtotal() {
  return (
    <div className='layoutCheckout__subtotal'>
      <h3>
        Subtotal 1 item: <span>₹ 42,999.00</span>
      </h3>
      <button>Proceed to Buy</button>
    </div>
  );
}

export default Subtotal;
