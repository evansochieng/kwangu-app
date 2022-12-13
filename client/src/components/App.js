import React, { useState, useEffect } from "react";
import Login from "./Login";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer"
import { Route, useNavigate } from "react-router-dom";

function App({ setproperty }) {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  

  const userDetails = {name,username,contact,password}

  const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userDetails),
    });
  }

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setUser(null);
        return <Route path="/" element={<Login />} />;
      }
    });
  }

  function handleCheckCart() {
    return navigate("/cart");
  }

  // if (!user) return <Login onLogin={setUser} />;
  if (user) {


    return (
      <div className="grey">
        <Navbar handleLogout={handleLogout} onLogout={setUser} />
        <br />
        <h2 id="h2">Welcome, {user.username}!</h2>
        <div>
          <div id="cart">
            <div id="cart1">
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                My Profile
              </button>
            </div>
            <div id="cart2">
              <button className="btn btn-secondary" onClick={handleCheckCart}>
                My cart
              </button>
            </div>
          </div>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Edit Profile
                  </h5>
                </div>
                <form className="edit-profile" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <h6 id="exampleInputEmail1">Kwangu ID: {user.id}</h6>
                  </div>
                  <div className="form-group">
                    <label id="exampleInputEmail1">Name</label>
                    <input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="name"
                    />
                  </div>
                  <div className="form-group">
                    <label id="exampleInputEmail1">Username</label>
                    <input
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="username"
                    />
                  </div>
                  <div className="form-group">
                    <label id="exampleInputEmail1">Contact</label>
                    <input
                      type="text"
                      onChange={(e) => setContact(e.target.value)}
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="contact"
                    />
                  </div>
                  <div className="form-group">
                    <label id="exampleInputEmail1">Password</label>
                    <input
                      type="text"
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="contact"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" id="pri">
                    Submit
                  </button>
                </form>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Home onLogout={setUser} setproperty={setproperty} />
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Login onLogin={setUser} />
      </div>
    );
  }
}
export default App;
