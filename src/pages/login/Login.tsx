import React from "react";
import logo from "../../images/logo.svg";
import pablo from "../../images/pablosignin.svg";
import "./login.scss";
const Login = () => {
  return (
    <div className="background">
      <div className="container">
        <div className="logo">
          <img alt="logo" src={logo} />
        </div>

        <div className="signin">
          <img src={pablo} alt="pablo-sign-in" />

          <div className="loginContainer">
            <h2>Welcome!</h2>
            <p>Enter details to begin.</p>
            <div className="inputContainer">
              <input placeholder="email" />
              <input placeholder="password" />
              <p>FORGET PASSWORD?</p>

              <div>
                <button>LOG IN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
