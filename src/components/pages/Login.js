import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import {Redirect} from "react-router-dom";
import '../../App.css';
import { Button } from "../Button";

function Login(props){
    const {name ,setName}= useState('');
    const {pass,setPassword}= useState('');
    
    let history= useHistory();
    
    const handleSubmit= data =>{
        data.preventDefault();
        console.log(name);
    return(
        <>
            <div className="login1">
                <form onSubmit={handleSubmit}>
                <input value={name} type="text" placeholder="usernsame"/>
                <input  value={pass} type="password" placeholder="password"/>
                <Button buttonStyle='btn--outline' onClick={()=>{history.push("/Profile")}}>Login </Button>
                <Button buttonStyle='btn--outline' onClick={()=>props.onFormSwitch('Signup')} href="/Signup">Don't have an acccount?,Signup here.</Button>
                </form>
            </div>
        </>
    );
}
}
export default Login;