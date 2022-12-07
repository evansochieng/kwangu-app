import React, {useState, useEffect} from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";

;

function App({setproperty}) {

  const [user, setUser] = useState("");
  
  const navigate = useNavigate()

   useEffect(() => {
     // auto-login
     fetch("/me").then((r) => {
       if (r.ok) {
         r.json().then((user) => setUser(user));
       }
     });
   }, []);

  // if (!user) return <Login onLogin={setUser} />;
  if (user) {
    return (
      <div>
        <Navbar />
        <br />
        <h2>Welcome, {user.username}!</h2>
        {/* <button className="btn btn-danger" onClick={() => navigate("/profile")}>
          My Profile
        </button> */}
        <div>
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            My Profile
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    {user.username}
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">{ user.name}</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Home onLogout={setUser} setproperty={setproperty} />
      </div>
    );
  } else {
    return (
      <div>
        <Login onLogin={setUser} />
      </div>
    );
  }

  
};
 export default App;