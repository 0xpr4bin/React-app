import React,{useState} from "react";
import Footer from "../Footer";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';



export const Login=(props)=>{
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');


    const  history = useHistory();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await fetch('http://127.0.0.1:8000/api/login/',
        {
            method:'POST',
         body: JSON.stringify({
            email :email,
            pass :pass
            }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        }
    }
)
    .then((response)=> response.json())
    .then((result)=>{
        console.log(result.data);
        if(result.message ==="200 ok"){
            alert("you are logged in");
            history.push('/profile')
        }
        else{
            alert("you are not signed in.")
        }
    })
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
                <button className="simple-btn" type="submit" >Log In</button>
                <p className="forgot-link">
                 <Link to="/forgot-password">Forgot Password?</Link>
                </p>
                <button className="link-btn" onClick={()=>props.onFormSwitch('Signup')}>Don't have an account? Sign Up here.</button>
            </form>
            
        </div>

        <Footer/>
        </>
    )
}