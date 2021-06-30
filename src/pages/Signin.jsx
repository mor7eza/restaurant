import React from "react";

const Signin = () => {
  return (
    <div className="signin-page">
      <div className="slider">
        <img src={process.env.PUBLIC_URL + "assets/img/undraw_Hamburger_8ge6.svg"} alt="" />
        <h1>Manage sales, inventory and othet transactions.</h1>
      </div>
      <div className="form-container">
        <div className="form">
          <h2>Welcome Back!</h2>
          <p className="sub-header">Please sign in to continue</p>
          <input type="text" placeholder="Sales ID number" />
          <input type="password" placeholder="Password" />
          <button>Sign in</button>
          <p className="or">or</p>
          <div className="alternative-login">
            <a href="google.com">
              <img src={process.env.PUBLIC_URL + "assets/img/google-logo.png"} alt="Google" />
              Sign in with Google
            </a>
            <a href="facebook.com">
              <img src={process.env.PUBLIC_URL + "assets/img/facebook-logo.png"} alt="Facebook" />
              Sign in with Facebook
            </a>
          </div>
          <a className="forgot" href="WWW">
            Forgot password?
          </a>
          <p className="registration">
            Don't have an account? Go to <a href="WWW">Registration</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
