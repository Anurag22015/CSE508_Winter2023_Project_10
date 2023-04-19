import React,{useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

import { Link,useNavigate } from 'react-router-dom';



function Login() {
 const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const logIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredintial) => {
      console.log(userCredintial);
      navigate("/notification");
    })
    .catch((error) => {
      console.log(error);
    });

  };  
  return (
    <div className="main">
      <div className="img">
        
      </div>
      <div className="login">
        <h2>Login</h2>

        <form action="#"  onSubmit={logIn}>
          <div className="detail">
            <label for="e-mail">Email:</label>
            <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Log In</button>
            <div><p>Don't have an account?</p><Link to='/signup'>SignUp</Link></div>
            
            
            

          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
