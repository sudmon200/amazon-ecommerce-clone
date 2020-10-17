import React from 'react';

function SecondaryNavItem({ textOne, textTwo }) {
  return (
    <div className='secondaryNav__item'>
      <span className='secondaryNav__textNormal'>{textOne}</span>
      <span className='secondaryNav__textBold'>{textTwo}</span>
    </div>
  );
}

export default SecondaryNavItem;
