// Login.jsx
import React, { useState } from 'react';
import './LoginPage.css';


const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    const loginUser = async  (e)=>{
        e.preventDefault()
        // console.log(email,password);
        if(email.length>0 && password.length>0){
            const res = await fetch("http://localhost:5000/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "/",
                },
                body:JSON.stringify({
                    email:email,
                    password:password
                })
            })

            console.log(await res.json());
        }
    }


    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form>
                <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                <button type="submit" onClick={loginUser}>Login</button>
            </form>
            <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
    );
}


export default Login;



