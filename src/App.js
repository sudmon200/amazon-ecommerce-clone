import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Checkout from './containers/Checkout';
import Login from './containers/Login';
import Shell from './components/Shell';
import { setUser } from './redux/userSlice';
import { auth } from './firebase';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('authUser =>', authUser);
      const userData = JSON.parse(JSON.stringify(authUser)); //read more on serializable and non-serializable data
      if (authUser) {
        dispatch(
          //@ToDo: parse data via a parser
          setUser({ user: userData })
        );
      } else {
        dispatch(setUser({ user: null }));
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Shell>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/checkout' component={Checkout}></Route>
          <Route exact path='/login' component={Login}></Route>
        </Switch>
      </Shell>
    </Router>
  );
}

export default App;
