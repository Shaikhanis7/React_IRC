
import React from 'react'
import {useState} from 'react';
const Adduser=()=> {
    const [data,setData]=useState({
        username:'',
        password:''
    })
    const handleChage=(e)=>
    {
  setData({...data,[e.target.id]:e.target.value})
    }
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        console.log(data)
    }
  return (
   <form onSubmit={handleSubmit}>
    <input type ='text' id='username' placeholder='username'onChange={handleChage}/>
    <input type ='text' id='password' placeholder='upassword'onChange={handleChage}/>
    <button type='submit' className='submit-btn'>Add</button>
   </form>
  )
}

export default Adduser;
