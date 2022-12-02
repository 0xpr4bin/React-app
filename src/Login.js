import React from "react";
import { useHistory } from "react-router-dom";
import {Redirect} from "react-router-dom";
function Login({authorized}){
    let history= useHistory();
    if(!authorized){
        return <Redirect to="/Signup"/>
    }
  
    return(
            <div>
                <input type="text" placeholder="usernsame"/>
                <input type="text" placeholder="password"/>
                <button onClick={()=>{history.push("/Profile")}}>Login </button>
            </div>
    );
}
export default Login;