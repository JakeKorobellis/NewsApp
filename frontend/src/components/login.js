import React from "react";
function Login() {
  return (
    <div className="home">
      <div className="login-page-split login-title">
        <span className="small-text-login black">NewsRoom</span>

        <span>Welcome Back!</span>
      </div>

      <div className="login-page-split">
        <div className="form">
          <form action="/login" method="post" className="form">
            <div className="form-inputs">
              <label className="resize">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="jdoe@newsroom.com"
                className="inputs-form"
                required
              />
            </div>

            <div className="form-inputs">
              <label for="password" className="resize">
                Password:
              </label>

              <input
                type="password"
                id="password"
                name="password"
                placeholder="********"
                className="inputs-form"
                required
              />
            </div>
            <input type="submit" value="Login" className="login-btn" />
          </form>
        </div>
      </div>
      <div className="footer-login-page black">
        Dont have an account?{" "}
        <a href="/" className="white">
          Sign up!
        </a>
      </div>
      <a href="/content" className="supersmall">
        Temp Bypass
      </a>
    </div>
  );
}

export default Login;
