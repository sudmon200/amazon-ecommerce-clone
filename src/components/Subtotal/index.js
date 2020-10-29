import React, { useState, useEffect } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';

import './Subtotal.scss';

function Subtotal({ productCount, subTotal }) {
  const history = useHistory();
  const { user } = useSelector(selectUser);

  console.log(' user ==>', user);

  // const [buttonDisabled, setButtonDisabled] = useState(true);
  // const [buttonClassName, setButtonClassName] = useState('');

  //console.log('productCount ==>', productCount);

  //@Todo: check the display and disabled logic, why useEffect not rerendering button when a items removed from cart
  //temporarily, logic is placed on the elemnt

  // useEffect(() => {
  //   if (productCount > 0) {
  //     setButtonDisabled(false);
  //     setButtonClassName('button__primary');
  //   }
  // }, [productCount]);

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
        className={`layoutCheckout__proceed ${
          productCount > 0 ? 'button__primary' : ''
        } `}
        disabled={productCount > 0 ? false : true}
        onClick={() => history.push(`${user ? '/payment' : '/login'}`)} //@ToDo: once user login, redirect to payment page
      >
        Proceed to Buy
      </button>
    </div>
  );
}

export default Subtotal;
