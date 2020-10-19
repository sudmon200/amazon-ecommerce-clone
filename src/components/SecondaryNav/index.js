import React from 'react';
import SecondaryNavItem from '../SecondaryNavItem';
import { selectUser } from '../../redux/userSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';

function SecondaryNav() {
  const { user } = useSelector(selectUser);

  console.log('user ===@@@@=>', user);

  const handleAuthentication = () => {
    console.log('handleAuthentication');
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className='secondaryNav'>
      <Link to='./login' onClick={handleAuthentication}>
        <SecondaryNavItem
          textOne={user ? 'Hello, ' + user.email : 'Hello Guest'}
          textTwo={user ? 'Sign out' : 'Sign in'}
        />
      </Link>
      <SecondaryNavItem textOne={'Returns'} textTwo={'& Orders'} />
      <SecondaryNavItem textOne={'Your'} textTwo={'Prime'} />
    </div>
  );
}

export default SecondaryNav;
