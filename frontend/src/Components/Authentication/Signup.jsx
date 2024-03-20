import React from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Img from '../../assets/authentication_vector1.svg';
import Background from '../../assets/authcard_background.jpg';

import './SignUp.css';
import { useState } from 'react';
import axios from 'axios';


import API_URL from '../../_helpers.js';


export default function Signup() {

    const navigate = useNavigate();
   
    const [ user , setuser] = useState({
      fullname:"",
      email:"",
      password1:"",
      phoneNo:"",
      age: 18,
      region:""
  
    });
    // const API_URL ='http://localhost:1111'
 
  
    const handleSubmit=(e)=>{
  
      console.log("in handle block!")
      e.preventDefault();
      const data = {
        "email":user.email,
        "password":user.password1,
        "fullname":user.fullname, 
        "phoneNo":user.phoneNo,
        "age": user.age,
        "region": user.region
      }
      console.log(data);
      axios.post(`${API_URL}/signup`,data).then(response=>{
        if (response.status ==400){
          alert("invalid signup")
        }else if (response.status==200){
          console.log("user logged in");
          Cookies.set('username',user.email);
          navigate('/user-dashboard')
        }
      })
     
  }
  
    const handleInput = (e)=>{
      const data = e.target.value;
      const name = e.target.name;
      console.log(data);
      setuser({...user,[name]:data});
   }
  return (
    <>
             <img className="authcard_background" src={Background} />
   
   <div className="container centre_div">
   
       <div className="card col-lg-8  col-md-10 col-sm-10 authcard">
       <div className="logo_head">
     
         <h2 className="alignCentre text-2xl"><span className="highlight_logo">IntelliCrowd</span></h2>
     </div>
           <div className="row">
              
                    <img className="m-0 col-lg-5 col-md-5 col-sm-12 vector_img" src={Img} />
                <div className=" col-lg-6 col-md-8 col-sm-12"> 
                   <form onSubmit={handleSubmit} className="sign_up_div">
                   <div className="row align_left">
                   <h5 className="col-lg-9 col-md-8 col-sm-8 mt-3 greycolor">Already have an account?</h5>
                   <button onClick={()=>navigate('/user-login')} className="mt-2 signin_button_head col-lg-3 col-md-3 col-sm-3 btn ">Sign in</button>
                   </div>
                   <h2 className="card_margin text-2xl">Welcome to <span className="highlight_logo">IntelliCrowd</span></h2>
                   <h5 className="card_margin greycolor">Register your account</h5>
                   <div className ="form-row row">
                       <div class="form-group col-lg-10 col-md-10 col-sm-10">
                         <label className="card_margin " for="inputName">Full name*</label>
                         <input type="text" 
                         className=" form-control" 
                         id="inputName" required 
                         value={user.fullname}
                         name = "fullname"
                         onChange={handleInput}
                         />
                       </div>
                      
                     </div>
                     <div class="col-lg-10 col-md-10 col-sm-10 form-group">
                       <label className="card_margin" for="inputAddress">Email*</label>
                       <input type="email" 
                       className=" form-control" 
                       id="inputEmail" 
                       placeholder="abc@123gmail.com" required
                       value={user.email}
                       name = "email"
                       onChange={handleInput}
                         />
                     </div>
                     <div class="col-lg-10 col-md-10 col-sm-10 form-group">
                       <label className="card_margin" for="inputPassword">Password*</label>
                       <input  
                       type="password" 
                       className=" form-control" 
                       id="inputPassword"  required
                       value={user.password1}
                       name = "password1"
                       onChange={handleInput}
                     />
                     </div>

                     <div class="col-lg-10 col-md-10 col-sm-10 form-group">
                       <label className="card_margin" for="inputPassword">Enter your Region</label>
                       <input  
                       type="text" 
                       className=" form-control" 
                       id="inputRegion"  required
                       value={user.region}
                       name = "region"
                       onChange={handleInput}
                       />
                     </div>

                     <div class="col-lg-10 col-md-10 col-sm-10 form-group">
                       <label className="card_margin" for="inputReferencecode">Phone Number</label>
                       <input type="text" 
                       className="form-control" 
                       id="inputReferencecode" 
                       value={user.phoneNo}
                         name = "phoneNo"
                         onChange={handleInput}
                       />
                     </div>
                     <div class="col-lg-10 col-md-10 col-sm-10 form-group">
                       <label className="card_margin" for="inputReferencecode">Enter your age</label>
                       <input type="number" 
                       className="form-control" 
                       id="inputReferencecode" 
                       value={user.age}
                         name = "age"
                         onChange={handleInput}
                       />
                     </div>
                     <button  type="submit" className="mt-3 btn signin_button_head">Sign up</button>
                     </form>
                   
                </div>
           </div>
       </div>
   </div>
   
    </>
  )
}
