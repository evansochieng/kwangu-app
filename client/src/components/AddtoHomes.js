import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

function AddtoHomes() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [no_of_bedrooms, setBeds] = useState("");
  const [no_of_bathrooms, setBaths] = useState("");
  const [user_id, setUser_id] = useState("");
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);



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
        no_of_bedrooms,
        no_of_bathrooms,
        user_id,
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
          type="name"
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
          type="url"
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
          value={no_of_bedrooms}
          onChange={(e) => setBeds(e.target.value)}
          placeholder="No of bedrooms"
          type="text"
          className="form-group form-control"
          required
        />
        <br />
        <input
          value={no_of_bathrooms}
          onChange={(e) => setBaths(e.target.value)}
          placeholder="No of bathrooms"
          type="text"
          className="form-group form-control"
          required
        />
        <input
          value={user_id}
          onChange={(e) => setUser_id(e.target.value)}
          placeholder="user_id"
          type="text"
          className="form-group form-control"
          required
        />

        <div>
          <h1>Upload Image</h1>
          {selectedImage && (
            <div>
              <img
                alt="not fount"
                width={"250px"}
                src={URL.createObjectURL(selectedImage)}
              />
              <br />
              <button onClick={() => setSelectedImage(null)}>Remove</button>
            </div>
          )}
          <br />

          <br />
          <input
            type="file"
            name="myImage"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
          />
        </div>
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