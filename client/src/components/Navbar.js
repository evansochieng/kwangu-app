import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar({onLogout, handleLogout}) {

  const navigate = useNavigate();

  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="logo"></div>
      <div className="collapse navbar-collapse">
        <div className="collapse navbar-collapse" id="navbar">
          <h1 className="header">
            <a href="/home" id="ch">
              Kwangu Homes
            </a>
          </h1>

          <ul className="navbar-nav mr-auto">
            <button
              className="btn btn-primary"
              id="btn"
              onClick={() => {
                return navigate("/new");
              }}
            >
              Sell Property
            </button>
            <br />
            <button
              className="btn btn-primary"
              onClick={handleLogout}
              id="logout"
            >
              {onLogout}Log Out
            </button>
            {/* <li class="nav-item">
                <a class="nav-link" href="./About">
                  About Us
                </a>
              </li> */}           
          </ul>
        </div>
      </div>
    </div>
  );
     
  
}

export default Navbar