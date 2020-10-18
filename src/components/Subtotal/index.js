import React from 'react';
import CurrencyFormat from 'react-currency-format';

import './Subtotal.scss';

function Subtotal({ productCount, subTotal }) {
  return (
    <div className='layoutCheckout__subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3>
              Subtotal ({productCount} {productCount > 1 ? 'items' : 'item'}):
              <span> {value}</span>
            </h3>
          </>
        )}
        decimalScale={2}
        value={subTotal}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
      />
      <button>Proceed to Buy</button>
    </div>
  );
}

export default Subtotal;
