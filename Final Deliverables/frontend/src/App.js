import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Notification from './components/notification';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/notification' component={Notification} />
      </Switch>
    </Router>
  );
}

export default App;
