import React from 'react'
import "./Registration.css"
import {useState} from "react"

export default function Registration(props) {
  const[name,setName]=useState()
  const[mail,setMail]=useState()
  const[mobile,setMobile]=useState()
  const[password,setPassword]=useState()

  const registrationfun=(event)=>{
    if(event.target.name=="name"){
      setName(event.target.value)
    }
    if(event.target.name=="mail"){
      setMail(event.target.value)
    }
    if(event.target.name=="mobile"){
      setMobile(event.target.value)
    }
    if(event.target.name=="password"){
      setPassword(event.target.value)
    }
  }
  return (
    <div id="registrationpagemaindiv">
      <div id="imagedivregistration">
        <div id="imagecontainer"><img src ="../3.jpg" id="registrationimageid"/></div>
      </div>
      <div id="detailsdivregistration">
        <div id="registrationcontainer">
           <h1 id="registrationwelcomemessage">Join Us</h1>
           <h1 id="registeredusernameh1"><i class="fa fa-user registrationicons1" aria-hidden="true"></i> <input type="text" name="name" id="registeredusername" value={name} onChange={registrationfun}/></h1><br/>
           <h1 id="registereduseremailh1"><i class="fa fa-envelope registrationicons2" aria-hidden="true"></i> <input type= "email" name="mail" id="registereduseremail" value={mail} onChange={registrationfun}/></h1><br/>
           <h1 id="registeredusermobileh1"><i class="fa fa-phone registrationicons3" aria-hidden="true"></i> <input type= "number" name="mobile" id="registeredusermobile" value={mobile} onChange={registrationfun}/></h1>
           <h1 id="registereduserpasswordh1"><i class="fa fa-key registrationicons4" aria-hidden="true"></i> <input type= "password" name="password" id="registereduserpassword" value={password} onChange={registrationfun}/></h1>
           <button id="registrationbutton" onClick={()=>props.registerfun(name,mail,mobile,password)}>Register</button>  
        </div>  
      </div>        
    </div>
  )
}
