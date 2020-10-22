import React, { useState, useEffect } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';

import './Subtotal.scss';

function Subtotal({ productCount, subTotal }) {
  const history = useHistory();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [buttonClassName, setButtonClassName] = useState('');

  console.log('productCount ==>', productCount);
  useEffect(() => {
    if (productCount > 0) {
      setButtonDisabled(false);
      setButtonClassName('button__primary');
    }
  }, [productCount]);

  console.log('buttonDisabled ==>', buttonDisabled);
  return (
    <div className='layoutCheckout__subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3>
              Subtotal ({productCount} {productCount > 0 ? 'items' : 'item'}):
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
      <button
        className={`layoutCheckout__proceed ${buttonClassName} `}
        disabled={buttonDisabled}
      >
        Proceed to Buy
      </button>
    </div>
  );
}

export default Subtotal;
