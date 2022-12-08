import React from 'react'

function Navbar() {
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
            {/* <li class="nav-item">
                <a class="nav-link" href="./About">
                  About Us
                </a>
              </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="./Login">
                Login
              </a>
            </li> */}
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