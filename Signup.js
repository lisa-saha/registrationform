import React from 'react'
import './Signup.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';

function Signup() {
    const[firstname,setFirstName]=useState("");
    const[lastname,setLastName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confpassword,setConfPassword]=useState("");
    const[birthday,setBirthday]=useState([]);
    const[gender,setGender]=useState("");
    const[passwordError,setPasswordError]=useState(false);
    
    const register =(e)=>{
      e.preventDefault();
      if(password !== confpassword) {
        setPasswordError(true);
      }
      else {
        setPasswordError(false);
      }
      console.log("firstname: ",firstname)
      console.log("lastname: ",lastname)
      console.log("Email: ",email)
      console.log("password: ",password)
      console.log("confPassword: ",confpassword)
      console.log("DOB: ",birthday)
      console.log("Gender: ",gender)
    }

  return (
    <>
    <div className='register'>
        <div className='regContainer'>
            <h1>Sign Up</h1>
            <p>It's quick and easy.</p>
            <div className='hr3'/>
            <form onSubmit={register}>
            <div className='row'>
              <input onChange={(e)=>{
                setFirstName(e.target.value);
              }}
              className='regName' type='name' placeholder='FirstName' required/>
              <input onChange={(e)=>{
                setLastName(e.target.value);
              }}
              className='regName' type='name' placeholder='LastName' required/>
            </div>
            <center className='center'>
              <input onChange={(e)=>{
                setEmail(e.target.value);}}
             type='email' placeholder='Email' required/>
            </center>
            <center className='center'>
              <input onChange={(event)=> setPassword(event.target.value)}
              type='password' placeholder='New Password' maxLength={"10"} required/>
                <input onChange={(event)=> setConfPassword(event.target.value)}
              type='password' placeholder='Confirm Password' maxLength={"10"} required/>
            </center> 
            {passwordError && <p className='warning'>*Password doest not match*.</p>}
            <h5 className='regDate'>Date Of Birth</h5>
            <div className='row'>
              <select className='regDate2' onChange={(e) => setBirthday([...birthday,e.target.value])}>
                <option value="Day">Day</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select className='regDate3' onChange={(e) => setBirthday([...birthday,e.target.value])}>
              <option value="Month">Month</option>
              <option value="1">Jan</option>
              <option value="2">Feb</option>
              <option value="3">Mar</option>
              <option value="4">Apr</option>
              <option value="5">May</option>
              <option value="6">Jun</option>
              <option value="7">Jul</option>
              <option value="8">Aug</option>
              <option value="9">Sep</option>
              <option value="10">Oct</option>
              <option value="11">Nov</option>
              <option value="12">Dec</option>
              </select>
              <select className='regDate3' onChange={(e) => setBirthday([...birthday,e.target.value])}>
              <option value="Year">Year</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
              <option value="2005">2005</option>
              <option value="2004">2004</option>
              <option value="2003">2003</option>
              <option value="2002">2</option>
              <option value="2001">2001</option>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
              <option value="1998">1998</option>
              <option value="1997">1997</option>
              <option value="1996">1996</option>
              <option value="1995">1995</option>
              <option value="1994">1994</option>
              <option value="1993">1993</option>
              <option value="1992">1992</option>
              <option value="1991">1991</option>
              <option value="1990">1990</option>
              <option value="1989">1989</option>
              <option value="1988">1988</option>
              <option value="1987">1987</option>
              <option value="1986">1986</option>
              <option value="1984">1984</option>
              <option value="1983">1983</option>
              <option value="1982">1982</option>
              <option value="1981">1981</option>
              </select>
              </div> 
              <h5 className='regGender'>Gender</h5>
              <div className='size'>
                <div className='regRadioContainer'>
                  <div className='wrapper'>
                    <label>Female</label>
                    <input onChange={(e) => setGender(e.target.value)} type='radio' name='gender' value="Female"/>
                  </div>
                  <div className='wrapper'>
                    <label>Male</label>
                    <input onChange={(e) => setGender(e.target.value)} type='radio' name='gender' value="Male"/>
                  </div>
                  <div className='wrapper'>
                    <label>Others</label>
                    <input onChange={(e) => setGender(e.target.value)} type='radio' name='gender' value="Others"/>
                  </div>
                </div>
              </div>
              <p className='regPolicy'>
                 By clicking Sign Up, You agree to our{" "}
                 <span>Terms,Data Policy</span> and <span>Cookies Policy</span> You May
                 receive SMS notification from us and can opt out at ant time.
              </p>
              <center>
                <button onClick={register} type='submit' className='regRegister'>
                  Sigh Up
                </button>
              </center>
              <center>
                <Link to="/"><p className='RegLogIn'>Already have an account ?</p></Link>
              </center>
                </form>
          </div>
    </div>
    </>
  )
}

export default Signup;
