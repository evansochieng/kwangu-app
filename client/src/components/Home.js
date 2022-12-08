import React, {useState,useEffect} from 'react'
import Login from './Login';
import {Route, useNavigate} from "react-router-dom"

function Home({onLogout,setproperty}) {

  const [houses, setHouses] = useState([]);
  const [copyHouses, setCopyHouses] = useState("")

  const navigate = useNavigate()
    
  useEffect(() => {
     fetch('/properties')
       .then((res) => res.json())
       .then((houses) => {
         setHouses(houses);
         setCopyHouses(houses)
       })
       .catch((error) => {
         console.error("console error:", error);
         console.log("Error!");
       });
  }, []);
  

  function handleShow(id) {
    fetch(`properties/${id}`)
      .then((res) => res.json())
      .then((property) => {
        console.log(property.user)
        setproperty(property)
        navigate('/show')
          // return <Route path="/show" element={<Showproperty property= {property} />}/>
      }
    // console.log(property)
      )
  }
  
  
  const homes = houses.map((house) => (
    <div key={house.id} className="col-sm">
      <div className="card">
        <img src={house.image_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" id="title">
            {house.name}
          </h5>
          <h4 className="card-title" id="title">
            Location : {house.location}
          </h4>
          <h5 className="card-title" id="tile">
            {house.price}
          </h5>
          <button className="btn btn-info" onClick={() => handleShow(house.id)}>
            Check Property
          </button>
        </div>
      </div>
    </div>
  ));

  // Handle Search

  function handleChange(e) {
    e.preventDefault();
    let searching = e.target.value.toLowerCase();
    setHouses(copyHouses.filter((val) =>
        val.location.toLowerCase().includes(searching.toLowerCase())
      )
    );
  }



   //Logout
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          onLogout(null)
          return <Route path="/" element={<Login />}/>
        }
      });
  }

  return (
    <div className="grey">
      <button className="btn btn-primary" onClick={handleLogout} id="logout">
        {onLogout}Log Out
      </button>
      <br />
      <button
        className="btn btn-primary"
        id="btn"
        onClick={() => {
          return navigate("/new");
        }}
      >
        Sell Property
      </button>
      <h2 id="header">Browse Our Propeties</h2>
      <br />
      <form className="form-inline " id="inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          onChange={handleChange}
          placeholder="Search"
          aria-label="Search"
        ></input>
      </form>
      <br />
      <div className="row">{homes}</div>
    </div>
  );
}

export default Home