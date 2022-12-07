import React, {useState} from "react";
import Register from "./Register";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Showproperty from "./Showproperty";
import Editprofile from "./Editprofile";

function Render() {

    const [property, setProperty] = useState({})

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={<App setproperty={setProperty} />}
          ></Route>
          <Route
            path="/show"
            element={<Showproperty property={property} />}
          ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile" element={<Editprofile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Render
