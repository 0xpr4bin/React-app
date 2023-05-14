    import React,{useState} from "react";
    import '../../App.css';
    import Footer from "../Footer";
    import { useHistory } from "react-router-dom";


    export const Signup=(props)=>{
        const [email,setEmail]=useState('');
        const [username,setFullName]=useState('');
        const [pass,setPass]=useState('');
        const [confirmpass,setConfirmPass]=useState('');

        const  history = useHistory();

        const handleSubmit=async(e)=>{
    
            e.preventDefault();
            await fetch('http://127.0.0.1:8000/api/register/',
            {
                method:'POST',
                 body: JSON.stringify({username,email,pass,confirmpass
                }),
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    }
            }
        )
        .then((response)=>response.json())
        .then((result)=>console.log(result))
            
        }
         return(
            <>
            <div className="auth-form">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h1>Please Sign Up</h1>
                <label htmlFor="fullname">Username</label>
                <input value={username} onChange={(e)=>setFullName(e.target.value)} type="name" placeholder="Enter your Name" id="username" name="username" />
                
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                
                <label htmlFor="password">Password</label>
                <input  value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="***************************************" id="password" name="password" />
                
                <label htmlFor="confirmpass">Confirm password</label>
                <input value={confirmpass} onChange={(e)=>setConfirmPass(e.target.value)} type="password" placeholder="****************************************" id="comfirmpass" name="confirmpass" />
                
                <button className="simple-btn"   type="submit">Sign Up</button>
           
                <button  className="link-btn" onClick={()=>props.onFormSwitch('Login')}>Already have an account? Log In here.</button>
            </form>
        </div>
            
            <Footer/>
        </>
         );
      }
    