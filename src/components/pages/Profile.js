import React from "react";
import {Redirect} from "react-router-dom";
function Profile({authorized}){
    if(!authorized){
        return <Redirect to="/Login"/>
    }
    return(
        <div className="profile">Welcome to my Profile</div>
    );
}
export default Profile;