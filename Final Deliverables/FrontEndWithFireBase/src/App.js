import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Notification from './components/notification';
import Home from './components/home';


function App() {
  return (  
<Router>
  <Routes>
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/" element={<Login/>} />
    <Route path="/notification" element={<Notification/>}/>

  </Routes>

</Router>

  );
}

export default App;
