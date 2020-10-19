import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

import './Login.scss';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log('email=>', email);
  console.log('password =>', password);

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((auth) => {
      history.push('/');
    });
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
        <form>
          <h5>Login</h5>
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
            <button type='submit' onClick={signIn}>
              Sign in
            </button>
          </p>
          <p>
            <button type='submit' onClick={register}>
              Create Your Amazon Account
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
