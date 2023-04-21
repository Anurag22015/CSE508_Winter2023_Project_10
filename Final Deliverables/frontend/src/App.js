import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Notification from './components/notification';





function App() {
  const[location,setLocation] = useState('');
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/notification' component={Notification} setLocation={setLocation} />
      </Switch>
    </Router>

    </>
  );
}

export default App;
