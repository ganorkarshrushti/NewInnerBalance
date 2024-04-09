// Signup.jsx
import React from 'react';
import './SignUp.css';

const Signup = () => {
    return (
        <div className="auth-container">
            <h2>Sign up</h2>
            <form>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button type="submit">Sign up</button>
            </form>
            <p>Already have an account? <a href="/loginpage">Login</a></p>
        </div>
    );
}

export default Signup;
