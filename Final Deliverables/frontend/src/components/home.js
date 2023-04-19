import React from "react";

function Login() {
  return (
    <div className="main">
     
     <h1>Welcome to My Website</h1>
	<p>Please log in or sign up to access the content.</p>
	<button onclick="location.href='login.html'">Log in</button>
	<button onclick="location.href='signup.html'">Sign up</button>
    </div>
  );
}

export default Login;