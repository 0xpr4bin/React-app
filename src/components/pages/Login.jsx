import React,{useState} from "react";
import Footer from "../Footer";

export const Login=(props)=>{
    const {email,setEmail}=useState('');
    const {pass,setPass}=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
        
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