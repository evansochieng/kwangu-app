import React, { useState, useEffect } from "react";
import Login from "./Login";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer"
import { Route } from "react-router-dom";

function App({ setproperty }) {
  const [user, setUser] = useState("");

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
              <button className="btn btn-secondary">My cart</button>
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
                <form className="edit-profile">
                  <div className="form-group">
                    <h5 id="exampleInputEmail1">Kwangu ID: {user.id}</h5>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="user id"
                    />
                  </div>
                  <div className="form-group">
                    <label id="exampleInputEmail1">{user.name}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="username"
                    />
                  </div>
                  <div className="form-group">
                    <label id="exampleInputEmail1">{user.username}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="username"
                    />
                  </div>
                  <div className="form-group">
                    <label id="exampleInputEmail1">{user.contact}</label>
                    <input
                      type="text"
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
