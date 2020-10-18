import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Checkout from './containers/Checkout';
import Shell from './components/Shell';

function App() {
  return (
    <Router>
      <Shell>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/checkout' component={Checkout}></Route>
        </Switch>
      </Shell>
    </Router>
  );
}

export default App;
