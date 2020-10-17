import React from 'react';
import SecondaryNavItem from '../SecondaryNavItem';

function SecondaryNav() {
  return (
    <div className='secondaryNav'>
      <SecondaryNavItem textOne={'Hello Guest'} textTwo={'Sign In'} />
      <SecondaryNavItem textOne={'Returns'} textTwo={'& Orders'} />
      <SecondaryNavItem textOne={'Your'} textTwo={'Prime'} />
    </div>
  );
}

export default SecondaryNav;
