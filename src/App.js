import Navbar from "./Navbar.js"
import Home from "./Home.js"
import Registration from "./Registration.js"
import './App.css';
import { Routes , Route} from 'react-router-dom';
import {useState} from "react"
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();
  const[userdata,setUserdata]=useState([])
  const registerfun=(name,mail,mobile,password)=>{
    var z = name!=null && mail!=null && mobile!=null && password!=null 
    if(z){
      setUserdata([...userdata,{name:name,mail:mail,mobile:mobile,password:password}])
      navigate("/")

    }

  }
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Registration registerfun={registerfun}/>} />
      </Routes>
    </div>
  );
}

export default App;
