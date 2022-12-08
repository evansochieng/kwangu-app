import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom"

function Showproperty({ property }) {

  const [houses, setHouses] = useState([])

   useEffect(() => {
     fetch("/properties")
       .then((res) => res.json())
       .then((houses) => {
         console.log(houses)
         setHouses(houses);
       })
       .catch((error) => {
         console.error("console error:", error);
         console.log("Error!");
       });
   }, []);
  
  const navigate = useNavigate("");


  const {
    image_url,
    name,
    location,
    price,
    no_of_bedrooms,
    no_of_bathrooms,
    description,
    user,
    id,
  } = property;

  // Handle Delete

  function handleDelete() {
    fetch(`/properties/${id}`, {
      method: "DELETE",
    });
    setHouses(houses.filter((house) => house.id !== id));
    navigate('/home')
  }

  return (
    <div className="grey">
      <div className="card w-50" id="crd">
        <br></br>
        <img src={image_url} className="card-img-top" id="img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title" id="title">
            {name}
          </h4>
          <h5 className="card-title" id="title">
            {price}
          </h5>
          <h5 className="card-title" id="title">
            {location}
          </h5>
          <p className="card-title">Bedrooms : {no_of_bedrooms}</p>
          <p className="card-title">Bathrooms : {no_of_bathrooms}</p>
          <p className="card-text">{description}</p>
          <div>
            <h5 id="title">Sales Manager Information</h5>
            <h6>Name : {user.name}</h6>
            <h6>Contact : {user.contact}</h6>
            <h6>Kwangu username : {user.username}</h6>
          </div>
          <button className="btn btn-success" onClick={()=>handleDelete(houses.id)}>Buy</button>
        </div>
      </div>
    </div>
  );
}

export default Showproperty