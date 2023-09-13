import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const route = process.env.REACT_APP_USER_LOGIN;
  const navigate = useNavigate();

  const [login, setLogin] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogin((login) => ({
      ...login,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //fetch on Route
    fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.account == true) {
          console.log(res, 111111111111);
          localStorage.setItem("token", res.token);
          navigate("/content");
        } else {
          alert("Invalid Username or Password");
        }
      });
  };

  return (
    <div className="home">
      <div className="login-page-split login-title">
        <span className="small-text-login black">NewsRoom</span>

        <span>Welcome Back!</span>
      </div>

      <div className="login-page-split">
        <div className="form">
          <form
            action="/login"
            method="post"
            className="form"
            onSubmit={handleSubmit}
          >
            <div className="form-inputs">
              <label className="resize">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="jdoe@newsroom.com"
                className="inputs-form"
                onChange={handleChange}
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
                onChange={handleChange}
                required
              />
            </div>
            <input type="submit" value="Login" className="login-btn" />
          </form>
        </div>
      </div>
      <div className="footer-login-page black">
        Dont have an account?{" "}
        <a href="/signup" className="white">
          Sign up!
        </a>
      </div>

      {/**
      <a href="/content" className="supersmall bypass">
        LOGIN BYPASS
      </a>
       */}
    </div>
  );
}

export default Login;
