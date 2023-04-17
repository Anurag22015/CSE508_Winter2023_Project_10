import React from "react";

function Signup() {
  return (
    <div className="main">
      <div className="img">
        
      </div>
      <div className="login">
      <h1>Sign Up</h1>
		<form>
        <div className="detail">
			<label for="email">Email:</label>
			<input type="email" id="email" name="email" required/>
			<label for="password">Password:</label>
			<input type="password" id="password" name="password" required/>
			<label for="confirm-password">Confirm Password:</label>
			<input type="password" id="confirm-password" name="confirm-password" required/>
			<button type="submit">Sign Up</button>
            </div>
		</form>
        
      </div>
    </div>
  );
}

export default Signup;
