import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import '../../App.css';
import Footer from '../Footer';

function ChangePasswordForm() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { token } = useParams(); // Get the unique token from the URL parameters
  const history = useHistory();

  const handleSubmit = async(event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    const response=fetch('http://127.0.0.1:8000/api/change-password/',{method:'post', body: JSON.stringify({password,confirmPassword})});
    const data = await response.json();
    console.log(data);
    // TODO: Send a request to your backend API to update the user's password with the new password and the token
    // Once the password has been updated, redirect the user to the login page
    if(data.status === 200){
        history.push('/login')
        }
  }

  return (
    <>
    <div className='change-password'>
    <form className='change-password-form' onSubmit={handleSubmit}>
        <h1>Change Password</h1>
      <label>New Password:</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          placeholder="*********************"
        />
      <br />
      <label>
        Confirm Password:
        </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
          placeholder="*********************"
        />
  
      <br />
      <button className='change-btn' type="submit">Submit</button>
    </form>
    </div>
    <Footer/>
    </>
  );
}

export default ChangePasswordForm;
