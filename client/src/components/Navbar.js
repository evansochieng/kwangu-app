import React from 'react'

function Navbar() {
  return (
  
<div className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="logo">
         
        </div>
        <div className="collapse navbar-collapse">
          <div class="collapse navbar-collapse" id="navbar">
            <h1 className="header">
              <a href="/" id="ch">
                KWANGU APP
              </a>
            </h1>
            <form class="form-inline" id="inline">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
            </form>
            <ul class="navbar-nav mr-auto">
              {/* <li class="nav-item">
                <a class="nav-link" href="./About">
                  About Us
                </a>
              </li> */}
              <li class="nav-item">
                <a class="nav-link" href="./Login">
                  Login
                </a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="./Contact">
                  Contact Us
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    );
     
  
}

export default Navbar