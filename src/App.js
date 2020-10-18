import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Checkout from './containers/Checkout';
import Shell from './components/Shell';

function App() {
  return (
    <Shell>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/checkout' component={Checkout}></Route>
        </Switch>
      </Router>
    </Shell>
  );
}

export default App;
