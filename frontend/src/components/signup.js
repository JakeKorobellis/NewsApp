import React from "react";
function Signup() {
  const route = process.env.REACT_APP_USER_SIGNUP;

  //State to record user data
  const [user, setUser] = React.useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(user);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <div className="home2">
      <div className="login-page-split login-title2">
        <span className="small-text-login black">NewsRoom</span>

        <span>Welcome!</span>
        <span className="small-text-login black">
          Your Go-To for Stock and Crypto News!
        </span>
      </div>

      <div className="signup-page-split">
        <div className="form">
          <form
            action="/signup"
            method="post"
            className="form"
            onSubmit={handleSubmit}
          >
            <div className="form-inputs">
              <label className="resize">First Name:</label>
              <input
                type="fname"
                id="fname"
                name="fname"
                placeholder="John"
                className="inputs-form"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-inputs">
              <label className="resize">Last Name:</label>
              <input
                type="lname"
                id="lname"
                name="lname"
                placeholder="Doe"
                className="inputs-form"
                onChange={handleChange}
                required
              />
            </div>

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
            <input type="submit" value="Signup" className="login-btn" />
          </form>
        </div>
      </div>
      <div className="footer-login-page2 black">
        Already have an account?{" "}
        <a href="/login" className="white">
          Login!
        </a>
      </div>
      <a href="/content" className="supersmall bypass">
        SIGNUP BYPASS
      </a>
    </div>
  );
}

export default Signup;
