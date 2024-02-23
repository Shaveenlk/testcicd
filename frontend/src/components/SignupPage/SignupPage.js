import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
import '../SignupPage/SignupPage.css';

function SignupPage() {
    const users = {
        GroomName: '',
        BrideName: '',
        email: '',
        password: '',
    }

    const [user,setUser] =useState(users)
    const navigate =useNavigate()

    const handleChange = (e) => {
        const {name,value} = e.target;
        setUser({...user,[name]:value});
        
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/create",user).then((response) => {
            toast.success("User Added Sucessfully",{position:'top-right'})
            navigate('/')
        }).catch((error) => {
            console.log(error)
        })
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input className='signup-input'
                    type="text"
                    name="BrideName"
                    // value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                />
                <input className='signup-input'
                    type="text"
                    name="GroomName"
                    // value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                />
                <input className='signup-input'
                    type="email"
                    name="email"
                    // value={formData.email}
                    onChange={handleChange}
                    placeholder="johndoe@doemail.com"
                />
                <input className='signup-input'
                    type="password"
                    name="password"
                    // value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button className="signup-button" type="submit">Sign Up</button>
                

                <button className="google-sign-in">
                        {/* file in the icons folder was not used habai */}
                        <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
                        Or sign Up with Google
                    </button>
                <p className="forgot-password">Forgot password?</p>
            </form>
        </div>
    );
}

export default SignupPage;
