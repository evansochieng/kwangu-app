import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

function AddtoHomes() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [bedrooms, setBeds] = useState("");
  const [bathrooms, setBaths] = useState("");
  const [error, setError] = useState("");



  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        location,
        description,
        image_url,
        price,
        bedrooms,
        bathrooms,
      }),
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        return navigate("/home");
      } else {
        res.json().then((err) => {
          console.log(err.errors);
          setError(err.errors);
        });
      }
    });
  }

  return (
    <div className="grey">
      <form className="forms" onSubmit={handleSubmit}>
        <br></br>
        <br></br>
        <h1>Sell</h1>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Username"
          type="text"
          className="form-group form-control"
          required
        />
        <br />
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Current Location"
          type="text"
          className="form-group form-control"
          required
        />
        <br />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Property description"
          type="text"
          className="form-group form-control"
          required
        />
        <br />
        <input
          value={image_url}
          onChange={(e) => setImage(e.target.value)}
          placeholder="http image url"
          type="text"
          className="form-group form-control"
          required
        />
        <br />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          type="text"
          className="form-group form-control"
          required
        />
        <br />
        <input
          value={bedrooms}
          onChange={(e) => setBeds(e.target.value)}
          placeholder="No of bedrooms"
          type="text"
          className="form-group form-control"
          required
        />
        <br />
        <input
          value={bathrooms}
          onChange={(e) => setBaths(e.target.value)}
          placeholder="No of bathrooms"
          type="text"
          className="form-group form-control"
          required
        />
        <br></br>
        <button type="submit" className="btn btn-warning">
          Sell
        </button>
        {/* {error.map((er) => (
          <h5 key={er} className="err">
            {er}!
          </h5>
        ))} */}
      </form>
      <br />
      <br />
      <br />
    </div>
  );
}

export default AddtoHomes