// Signup.jsx
import React, { useState } from 'react';
import './SignUp.css';

const Signup = () => {
  
    const [fullname,setFullName]= useState("")
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [passwordVerify,setPasswordVerify]= useState("")

    const signUpUser= async(e)=>{

        e.preventDefault()
        if(fullname.length,email.length,password.length,passwordVerify.length,password===passwordVerify){
            const res = await fetch("http://localhost:5000/signup",
                {
                    method:"POST",
                    headers: {
                        "Content-Type": "application/json",
                        "accept": "/",
                    },
                    body:JSON.stringify({
                        fullname,
                        email,
                        password
                    })
                }
            )

            console.log(await res.json())
        }
        
    }

    
    
    return (
        <div className="auth-container">
            <h2>Sign up</h2>
            <form>
                <input type="text" placeholder="Full Name" onChange={(e)=>setFullName(e.target.value)}/>
                <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                <input type="password" placeholder="Confirm Password" onChange={(e)=>setPasswordVerify(e.target.value)}/>
                <button type="submit" onClick={signUpUser}>Sign up</button>
            </form>
            <p>Already have an account? <a href="/loginpage">Login</a></p>
        </div>
    );
}

export default Signup;
