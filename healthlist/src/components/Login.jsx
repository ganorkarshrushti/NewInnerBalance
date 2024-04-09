import React from 'react';
import './Login.css';
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
const Login = () => {
    return (
        <div className="login" >
            <div className="container">
                <h1>Log in</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" /><br />
                <input type="checkbox" /><span>Remember me</span>
                <a href="#">Forgot password?</a>
                <button><a href='/exercise'>log in</a></button>
               <p>----Or Connect With---</p>
               <ul style={{ listStyleType: 'none', paddingRight: '70px' }}>
                
    <a href="https://www.instagram.com/signin/" target="_blank" rel="noopener noreferrer">
        <li><FaGithub /></li>
    </a>
    <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer">
        <li style={{ marginRight: '40px' }}><BsInstagram /></li>
    </a>
  
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <li style={{ marginRight: '40px' }}><FaFacebook /></li>
    </a>
    <a href="https://myaccount.google.com/" target="_blank" rel="noopener noreferrer">
        <li style={{ marginRight: '40px' }}><FaTwitter /></li>
    </a>
  
</ul>

                <div className="clearfix"></div>
                
            </div>
        </div>
    );
}

// Register component
const Register = () => {
    return (
        <div className="register">
            <div className="container">
                <i className="fas fa-user-plus fa-5x"></i>
                <h2>Hello, friend!</h2>
                <p>Enter your personal details and Start your mental health journey with us!</p>
            <a href='/signup'> <button>Register <i className="fas fa-arrow-circle-right"></i></button></a>   
            </div>
        </div>
    );
}

// Main component containing both login and register components
const App = () => {
    return (
        <div className="container">
            <Login />
            <Register />
        </div>
    );
}

export default App;