import React from 'react'

function Showproperty({ property }) {

  const {
    image_url,
    name,
    location,
    price,
    no_of_bedrooms,
    no_of_bathrooms,
    description,
    user,
    // id,
  } = property;
  
  return (
    <div className="grey">
      <div className="card w-50" id="crd">
        <br></br>
        <img src={image_url} className="card-img-top" id="img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" id="title">
            {name}
          </h5>
          <h5 className="card-title" id="title">
            {price}
          </h5>
          <h4 className="card-title" id="title">
            {location}
          </h4>
          <p className="card-title">Bedrooms : {no_of_bedrooms}</p>
          <p className="card-title">Bathrooms : {no_of_bathrooms}</p>
          <p className="card-text">{description}</p>
          <div>
            <h5 id="title">Owner's Information</h5>
            <h6>Name : {user.name}</h6>
            <h6>Contact : {user.contact}</h6>
            <h6>Kwangu username : {user.username}</h6>
          </div>
          <button className="btn btn-success">Buy</button>
        </div>
      </div>
    </div>
  );
}

export default Showproperty