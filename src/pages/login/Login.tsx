import { useState } from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as PabloSignIn } from "../../images/pablosignin.svg";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const toggleShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const RedirectToUsers = () => {
    navigate("/users");
  };
  return (
    <div className="login-container">
      <div className="container-padding">
        <div className="logo">
          <Logo />
        </div>

        <div className="signup-container">
          <PabloSignIn className="pablo-logo" />

          <div className="form-container">
            <h1>Welcome!</h1>
            <p>Enter details to begin.</p>
            <div className="input-container">
              <input placeholder="Email" type="email" />
              <div className="password">
                <input
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                />
                <h4 onClick={toggleShowPassword}>Show</h4>
              </div>
              <h3>Forget password?</h3>

              <div className="login-btn" onClick={RedirectToUsers}>
                <button>Log in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
