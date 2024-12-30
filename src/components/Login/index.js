import React, { useState } from "react";
import { IoLogIn } from "react-icons/io5";
import "./index.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const onSubmitLoginForm = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-bg-cont">
      <div className="login-cont">
        <img
          className="cloud-img"
          src="https://res.cloudinary.com/dkk6a7svu/image/upload/v1735035953/o3plogoyliblqbk2tera.png"
          alt="cloud-img-login"
        />
        <div className="login-card">
          <form className="form-cont" onSubmit={onSubmitLoginForm}>
            <img
              className="logo-img"
              src="https://res.cloudinary.com/dkk6a7svu/image/upload/v1735030376/q37na7unsutp7lxinwjl.png"
              alt="logo-img"
            />
            <h1 className="login-h1">
              Organizer <span>Login</span>
              <IoLogIn className="login-icon" />
            </h1>
            <label className="label-login" htmlFor="username">
              Username
            </label>
            <input
              className="input-login"
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <label className="label-login" htmlFor="password">
              Password
            </label>
            <input
              className="input-login"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <button type="submit" className="login-btn">
              Login
            </button>
            {errMsg !== "" && <p className="err-para">{errMsg}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
