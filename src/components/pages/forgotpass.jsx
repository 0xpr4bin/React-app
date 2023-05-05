import React, { useState } from 'react';
import '../../App.css';
import { useHistory } from "react-router-dom";
import Footer from '../Footer';

function ForgotPasswordForm() {
  const [email, setEmail] = useState('');

  const  history = useHistory();

  const handleSubmit = async(event) => {
    event.preventDefault();
    const response=fetch('http://127.0.0.1:8000/api/forgot-password/',{method:'post', body: JSON.stringify({email})});
    const data = await response.json();
    console.log(data);
    console.log(email);
    if(data.status === 200){
        history.push('/home')
        }
    
    // TODO: Send a request to your backend API to initiate the password reset process
  }

  return (
    <>
    <div className="auth-form1">
    <form className="forgot-password-form" onSubmit={handleSubmit}>
    <h1 >Forgot Password </h1>
    <label>Email:</label>
        <input

          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          placeholder="youremail@gmail.com"
        />
     <button className='forgot-btn'  type="submit">Submit</button>
    </form>
    </div>
    <Footer/>
 </>
  );
}

export default ForgotPasswordForm;
