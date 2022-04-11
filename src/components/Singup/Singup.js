import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogo from "../../Assets/Image/google.svg";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Singup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfiramPassword, setConfiramPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, hookerror] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleComfiram = (event) => {
    setConfiramPassword(event.target.value);
  };
  if(user){
    navigate('/shop');
  }
  const ceratefromsubmit = (event) => {
    event.preventDefault();
    if (password !== comfiramPassword) {
      setError("did not password match");
      return;
    }
    if (password.length < 6) {
      setError("mixmum six password");
      return;
    }
    createUserWithEmailAndPassword(email, password)
    .then((result) => {
      console.log("user create");
    });
  };
  return (
    <div className="auth-form-container ">
      <div className="auth-form">
        <h1>Sign Up</h1>
        <form onSubmit={ceratefromsubmit}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <input
                onBlur={handleEmail}
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                onBlur={handlePassword}
                type="password"
                name="password"
                id="password"
                required
              />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="input-wrapper">
              <input
                onBlur={handleComfiram}
                type="password"
                name="confirmPassword"
                id="confirm-password"
                required
              />
            </div>
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <p style={{ color: "red" }}>{hookerror}</p>
          <button type="submit" className="auth-form-submit">
            Sign Up
          </button>
        </form>
        <p className="redirect">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
        <div className="horizontal-divider">
          <div className="line-left" />
          <p>or</p>
          <div className="line-right" />
        </div>
        <div className="input-wrapper">
          <button className="google-auth">
            <img src={GoogleLogo} alt="" />
            <p> Continue with Google </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Singup;
