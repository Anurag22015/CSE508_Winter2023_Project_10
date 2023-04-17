import React from "react";

function Login() {
  return (
    <div className="main">
      <div className="img">
        
      </div>
      <div className="login">
        <h2>Login</h2>

        <form action="#">
          <div className="detail">
            <label for="e-mail">Email:</label>
            <input type="email" id="email" name="email" required />
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
