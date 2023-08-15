import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
    return(
        <>
        <div className='Login'>
            <div className='parkTest'>
                <div className='park'>
                Park Institution
                </div>
                <div className='title'>
                    Welcome to The Park <br/>
                    Best Address of Institutions
                </div>
            </div>
            <div className='LoginContainer'>
                <div className='LoginDetails'>
                    <input type='email' placeholder='Email address or phone number' name='email'/>
                    <br/>
                    <input type="password" placeholder='Password' name='password' maxLength={"9"}/>
                    <br/>
                    <Link to='/home' className="bttn"><strong>Login</strong></Link>
                    </div>
                    <div className='forget'>
                        <a href='forget'>Forgotten Password??</a>
                        <br/>
                        <Link to="/signup" className="bttn1" style={{color:"white"}}>
                            Create A New Account
                        </Link>

                </div>
            </div>
        </div>
     </>
    )
}

export default Login
