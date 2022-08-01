import React from 'react'
import "./Navbar.css"
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  let navigate = useNavigate();
  const registerfun=()=>{
    navigate("register")
  }
  return (
    <div id="navbar">
        <div id="navpages">
            <div id="logo">
                <input type="button" value="F" id="f"/>
                <input type="button" value="R"/>
                <input type="button" value="I"/>
                <input type="button" value="E"/>
                <input type="button" value="N"/>
                <input type="button" value="D"/>
            </div>
            <div id="register"><input type="submit" value="Register" onClick={registerfun}/></div>
           
        </div>
    </div>
  )
}
