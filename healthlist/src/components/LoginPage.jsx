// Login.jsx
import React from 'react';
import './LoginPage.css';


const Login = () => {
    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
    );
}


export default Login;



