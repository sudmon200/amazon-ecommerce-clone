import React from 'react';
import CurrencyFormat from 'react-currency-format';

import './Subtotal.scss';

function Subtotal() {
  return (
    <div className='layoutCheckout__subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3>
              Subtotal (0 items): <span> 0</span>
            </h3>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
      />
      <button>Proceed to Buy</button>
    </div>
  );
}

export default Subtotal;
