import React from 'react'
import "./Home.css"

export default function () {
  return (
    <div id="homepagemaindiv">
        <div id="imageandcontent">
            <div id="imagediv">
                <img src="../2.jpg" alt="" id="imageid"/>
            </div>
            <div id="logindiv">
                <div id="logindivinsidediv">
                <h1 id="loginwelcomeh1">Welcome Back!</h1>
                <h1 id="loginemailh1"><i class="fa fa-user loginicons" aria-hidden="true"></i><input type="email" /> </h1>
                <h1 id="loginpasswordh1"><i class="fa fa-key loginicons" aria-hidden="true"></i><input type="password" /> </h1>
                <h1 id="buttonh1"><button>Login</button> </h1>
                </div>

            </div>
        </div>
    </div>
  )
}
