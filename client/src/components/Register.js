import React, { useState } from 'react'
import { useNavigate} from "react-router-dom"


function Register() {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState([])

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        contact,
        password,
        password_confirmation: passwordconfirmation,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return navigate('/home')
        } else {
          res.json().then((err) => {
            console.log(err.errors)
            setError(err.errors);
          });
        }
      })
  }
  return (
    <div className="forms-page">
      <form className="forms" onSubmit={handleSubmit}>
        <br></br>
        <h2 className="title">Register</h2>
        <br></br>
        <br></br>
        <div className="form">
          <div className="inputfield">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-group form-control"
              placeholder="Name"
            />
          </div>
          <div className="inputfield">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-group form-control"
              placeholder="Username"
            />
          </div>

          <div className="inputfield">
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="form-group form-control"
              placeholder="Contacts"
            />
          </div>

          <small id="emailHelp" class="form-text text-muted">
            Password must be at least 8 characters
          </small>

          <div className="inputfield">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-group form-control"
              placeholder="Password"
            />
          </div>
          <div className="inputfield">
            <input
              type="password"
              value={passwordconfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              className="form-group form-control"
              placeholder="Confirm Password"
            />
          </div>

          <br></br>
          <div className="inputfield terms">
            <label className="check">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <p>Agreed to terms and conditions</p>
          </div>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
          {error.map((er) => (
            <h5 key={er} className="err">
              {er}!
            </h5>
          ))}
        </div>
      </form>
    </div>
  );
	

}

export default Register

