import React, { useEffect, useState } from 'react'
import './user.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import backendUrl from '../../config/backendUrl.js'

const User = () => {

  const [users,setUsers] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      const response =await axios.get(`${backendUrl}/api/fetch`).then((response) => {
        setUsers(response.data)
      })
    }
    fetchData();
  },[])


  const deleteUser = async(id) => {
    await axios.delete(`${backendUrl}/api/deleteuser/${id}`).then((response) => {
      setUsers((prevUser)=>prevUser.filter((user) => user._id !== id))
      toast.success("User Deleted Sucessfully",{position:'top-right'})
    })
  }

  return (
    <div className='userTable'>
      <Link to={"/add"} className='addButton'>Add User</Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
            <tr>
                <th>S.No</th>
                <th>User name</th>
                <th>User Email</th>
                <th>Actions</th>
                <th>baba</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user,index) => {
                    return (
                        <tr key={user._id}>
                            <td>{index+1}</td>
                            <td>{user.fname} {user.lname}</td>
                            <td>{user.email}</td>
                            <td className='actionButtons'>
                                <button onClick={() => deleteUser(user._id)}><i className="fas fa-trash"></i></button>
                                <Link to={`/edit/${user._id}`}><i className="fas fa-edit"></i></Link>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default User
