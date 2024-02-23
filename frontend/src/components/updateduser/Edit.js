import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import '../adduser/add.css'
import axios from 'axios'
import toast from 'react-hot-toast'

const Edit = () => {
  const users ={
    fname:'',
    lname:'',
    email:'',
  }

  const {id} =useParams();
  const navigator = useNavigate();

  const [user,setUsers] = useState(users);

  const inputChangeHandler = (e) =>{
    const {name,value} = e.target;
    setUsers({...user,[name]:value});
    console.log(user)
  }

  useEffect(() =>{
      axios.get(`http://localhost:8000/api/fetchone/${id}`).then((response) => {
        setUsers(response.data)
       
      }).catch((error) =>{
        console.log(error)
      })
  },[id])

  const submitForm = async(e) =>{
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/updateuser/${id}`,user).then((response) =>{
      toast.success("User Updated Sucessfully",{position:'top-right'})
      navigator('/')
    }).catch((error) =>{
      console.log(error)
    })
  }


  return (
    <div className='addUser'>
    <Link to={"/"}>Go Back</Link>
    <h3>Update User</h3>
    <form className='addUserForm' onSubmit={submitForm}>
      <div className='inputGroup'>
          <label htmlFor='fname'>First Name</label>
          <input type="text" value={user.fname} onChange={inputChangeHandler} name="fname" id="fname" autoComplete='off' placeholder='First name' />
      </div>
      <div className='inputGroup'>
          <label htmlFor='lname'>Last Name</label>
          <input type="text" value={user.lname} onChange={inputChangeHandler} name="fname" id="lname" autoComplete='off' placeholder='Last name' />
      </div>
      <div className='inputGroup'>
          <label htmlFor='email'>Email</label>
          <input type="text" value={user.email} onChange={inputChangeHandler} name="email" id="email" autoComplete='off' placeholder='Email' />
      </div>
      <div className='inputGroup'>
         <button type='submit' onChange={inputChangeHandler}>Update User</button>
      </div>
    </form>
  </div>
  )
}

export default Edit
