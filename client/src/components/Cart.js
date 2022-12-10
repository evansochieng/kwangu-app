import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";


function Cart({property}) {
  const [home, setHome] = useState([]);
  const [houses, setHouses] = useState([]);

  const handleClick = (event) => {
    event.preventDefault();
    setHome([...home, property]);
    console.log(home);
  };

  const {id,} = property;

  const navigate = useNavigate();

   useEffect(() => {
     fetch("/properties")
       .then((res) => res.json())
       .then((houses) => {
         //  console.log(houses)
         setHouses(houses);
       })
       .catch((error) => {
         console.error("console error:", error);
         console.log("Error!");
       });
   }, []);

  // Handle Delete

  function handleDelete() {
    fetch(`/properties/${id}`, {
      method: "DELETE",
    });
    setHouses(houses.filter((house) => house.id !== id));
  }

  return (
    <div>
      <h1>Cart</h1>
      <button onClick={handleClick} className="btn btn-success">
        See cart
      </button>
      <div className="row">
        {home.map((x, i) => (
          <div className="col-sm">
            <div className="card">
              <div key={x.id} className="card-title" id="title">
                {" "}
                {x.name}
                <img
                  src={x.image_url}
                  className="card-img-top"
                  id="img-top"
                  alt="..."
                />
                <h5 className="card-title" id="title">
                  {x.price}
                </h5>
                <h5 className="card-title" id="title">
                  {x.location}
                </h5>
                <p className="card-title">Bedrooms : {x.no_of_bedrooms}</p>
                <p className="card-title">Bathrooms : {x.no_of_bathrooms}</p>
                <p className="card-text">{x.description}</p>
              </div>
              <button
                className="btn btn-warning"
                onClick={() => handleDelete(houses.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart
