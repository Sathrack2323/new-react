import React from "react";

import { dividerClasses } from "@mui/material";

function Contact(){
    return (

        <div class="contener"style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",gap:"100px"}} >
            <div>
                <h1>LAPTAP-TECH-CONTACT</h1>
                <p><h4>PHONE NUMBER:9327276193</h4></p>
                <p><h4>EMAIL:KUMARSHIVAM9327@gmail.com</h4></p>
                <p><h4>ADDRESS:CHANNAI</h4></p>
            </div>
            <div class>
            <img src={require('../component/29.jpg')} width="600px" height="450px" sx={{borderRadius:"20px"}} ></img>
            </div>
        </div>
    );
}
export default Contact;
