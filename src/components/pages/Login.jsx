import React,{useState} from "react";
import Footer from "../Footer";
import { useHistory } from "react-router-dom";


export const Login=(props)=>{
    const {email,setEmail}=useState('');
    const {pass,setPass}=useState('');


    const  history = useHistory();

    const handleSubmit=async(e)=>{
        const response=fetch('http://127.0.0.1:8000/login',{method:'post', body: JSON.stringify({email,pass})});
        const data = await response.json();
        console.log(data);
        e.preventDefault();
        console.log(email);
        if(data.status == 200){
            history.push('/profile')
            }
        
        
    }
    return(
        <>
        <div className="auth-form">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Please Log In </h1>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input  value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="****************************************" id="password" name="password" />
                <button className="simple-btn" type="submit">Log In</button>
                <button className="link-btn" onClick={()=>props.onFormSwitch('Signup')}>Don't have an account? Sign Up here.</button>
            </form>
        </div>
            <Footer/>
        </>
    )
}