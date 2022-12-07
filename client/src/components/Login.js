import React, { useState } from "react";
import Home from "./Home";
// import { Route } from "react-router-dom";
import Register from "./Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Navigate } from "react-router-dom";
  
function Login({onLogin}) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);


  // const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ username,password,}),
    })
      .then((res) => {
        if (res.ok){
          res.json().then((user) => onLogin(user))
          return <Route path="/" element={<Home onLogout={onLogin} />} />;
        } else {
          res.json().then((err) => {
            setErrors(err.error);
          })
        }
      })
  }

  return (
    <div className="loginbox">
      <form className="forms" onSubmit={handleSubmit}>
        <br></br>
        <br></br>
        <h1>Login here</h1>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          type="text"
          className="form-group form-control"
          required
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          className="form-group form-control"
          required
        />{" "}
        <br></br>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <br></br>
        {errors.map((err) => (
          <h4 key={err} className="err">
            {err}
          </h4>
        ))}
        <a href="/Register">Forgot your password?</a>
        <p>
          Don't have an account yet?{" "}
          <button
            className="btn btn-primary"
            onClick={() => {
              return <Route path="/" element={<Home onLogout={onLogin} />} />;
            }}
          >
            <a href="/Register">Register</a>
          </button>
        </p>
      </form>
    </div>
  );
}

export default Login;
