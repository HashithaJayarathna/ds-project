import React, { useEffect, useState } from "react";
import "./Signup.css";

import user_icon from "../../Assets/LoginSignup/person.png";
import email_icon from "../../Assets/LoginSignup/mail.png";
import password_icon from "../../Assets/LoginSignup/key.png";

const Signup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="Header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forgot Password? <span>Click Here!</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default Signup;
