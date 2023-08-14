import React from "react";
function Login() {
  return (
    <div className="home">
      <div className="login-page-split login-title">
        <span className="small-text-login black">NewsRoom</span>

        <span>Welcome Back!</span>
      </div>

      <div className="login-page-split">
        Login Form
        <a href="/content">Login</a>
      </div>
      <div className="footer-login-page black">
        Dont have an account?{" "}
        <a href="/" className="white">
          Sign up!
        </a>
      </div>
    </div>
  );
}

export default Login;
