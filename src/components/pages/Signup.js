import React,{useState} from "react";
import { Button } from '../Button';
import Input from "../../Input";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import '../../App.css';

const schema = yup.object({
    firstname: yup.string().required("Firstname is required field"),
    lastname: yup.string().required("Lastname is required field"),
    username: yup.string().required("Username is required field"),
    phonenumber: yup.string().required("Phone number is required field").matches( /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,"Phone number is not valid"),
    email: yup.string().required("Email is required field").email("Email isnot valid!"),
    password: yup.string().required("Password is required field").min(8,"Password must be atleast 8 characters"),
    confirmpassword: yup.string().required("Confirm Password is required field").oneOf([yup.ref("password")],"Password must be same"),
  }).required();

  function Signup(props){
    const {email ,setEmail}= useState('');
    const {username,setUsername}= useState('');
    const {firstname ,setFirstname}= useState('');
    const {middlename ,setMiddlename}= useState('');
    const {lastname,setLastname}= useState('');
    const {confirmpassword ,setConfirmPassword}= useState('');
    const {phonenumber ,setPhonenumber}= useState('');

    const{handleSubmit,register,formState:{errors}}=useForm({
      resolver:yupResolver(schema),
      });
      console.log(errors);
      const formSubmit= data =>{
        data.preventDefault();
        console.log(data);
      }
    return(
    <>

    <div className="sign-up">
    <form  onSubmit={handleSubmit(formSubmit)}>
    <h1>Please Sign-up</h1>
    <Input id="firstname" label="Firstname" placeholder="Enter Firstname" register={{...register("firstname")}} errorMessage={errors.firstname?.message}/> 
    <Input id="middlename" label="Middlename" placeholder="Enter Middlename" register={{...register("middlename")}} errorMessage={errors.middlename?.message}/>
    <Input id="lastname" label="Lastname" placeholder="Enter Lastname" register={{...register("lastname")}} errorMessage={errors.lastname?.message}/>
      <Input id="username" label="Username" placeholder="Enter Username" register={{...register("username")}} errorMessage={errors.username?.message}/>
      <Input id="phone-number" label="Phone Number" placeholder="Enter Phonenumber" register={{...register("phonenumber")}} errorMessage={errors.phonenumber?.message}/>
      <Input id="email" label="Email" placeholder="Enter Email" register={{...register("email")}} errorMessage={errors.email?.message}/>
      <Input id="password" label="Password" placeholder="Enter Password" register={{...register("password")}} errorMessage={errors.password?.message}/>
      <Input id="confirm-password" label="Confirm Password" placeholder="Confirm Password" register={{...register("confirmpassword")}} errorMessage={errors.confirmpassword?.message}/>
      <Button  buttonStyle='btn--outline'>Signup</Button>
      
      <Button buttonStyle='btn--outline' onClick={()=>props.onFormSwitch('Login')} href="/Login">Already have an account?Login</Button>
    </form>
    </div>

    </>
    );
  }
  export default Signup;