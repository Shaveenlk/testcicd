import React, { useState } from 'react'
import './add.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import backendUrl from '../../config/backendUrl.js'
// export const BACKEND_APP_URL ="https://crudboy.onrender.com";

const Add = () => {
    const users ={
        fname:'',
        lname:'',
        email:'',
        password:''
    }
    const [user,setUser] =useState(users)
    const navigate =useNavigate()

    const inputhandler = (e) => {
        const {name,value} = e.target;
        setUser({...user,[name]:value});
        
    }

    const submitForm = async(e) => {
        e.preventDefault();
        await axios.post(`${backendUrl}/api/create`,user).then((response) => {
            toast.success("User Added Sucessfully",{position:'top-right'})
            navigate('/')
        }).catch((error) => {
            console.log(error)
        })
    }

  return (
    <div className='addUser'>
      <Link to={"/"}>Go Back</Link>
      <h3>Add new User</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className='inputGroup'>
            <label htmlFor='fname'>First Name</label>
            <input type="text" onChange={inputhandler} name="fname" id="fname" autoComplete='off' placeholder='First name' />
        </div>
        <div className='inputGroup'>
            <label htmlFor='lname'>Last Name</label>
            <input type="text" onChange={inputhandler} name="lname" id="lname" autoComplete='off' placeholder='Last name' />
        </div>
        <div className='inputGroup'>
            <label htmlFor='email'>Email</label>
            <input type="text" onChange={inputhandler} name="email" id="email" autoComplete='off' placeholder='Email' />
        </div>
        <div className='inputGroup'>
            <label htmlFor='password'>Password</label>
            <input type="password" onChange={inputhandler} name="password" id="password" autoComplete='off' placeholder='Password' />
        </div>
        <div className='inputGroup'>
           <button type='submit'>Add User</button>
        </div>
      </form>
    </div>
  )
}

export default Add
