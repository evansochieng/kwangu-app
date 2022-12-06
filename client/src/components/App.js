import Login from "./Login";
import  Register  from "./Register";
import Navbar from "./Navbar";
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Home from "./Home";

function App() {

    return  (
    <div>
      <Navbar/>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>

   </Routes>
   </BrowserRouter> 
   
    </div>
    )
    };
 export default App;
  
  