import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import InfoIcon from '@material-ui/icons/Info';

import './Login.scss';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInMessage, setSignInMessage] = useState('');

  console.log('signInMessage ==>', signInMessage);

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((error) => setSignInMessage(error.code));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='layout'>
      <div className='layout__login'>
        <form className='layout__loginForm'>
          <h3>Login</h3>
          <h5>Email</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            <button
              type='submit'
              onClick={signIn}
              className='button__primary  layout__loginFormSignin'
            >
              Sign in
            </button>
          </p>
          {signInMessage && (
            <p>
              <InfoIcon />
              <i>{signInMessage}</i>
            </p>
          )}
          <p>If you don't have an account, please Register</p>
          <p>
            <button
              type='submit'
              onClick={register}
              className='button__secondary layout__loginFormRegister'
            >
              Create Your Amazon Account
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
