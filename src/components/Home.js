import React, { useState } from 'react'
import { List } from './List'
import axios from 'axios'

export const Home = () => {

 const [userField,setUserField]=useState({
    name:"",
    email:"",
    password:""
 })
  const changeUserFieldHandler=(e)=>{
    setUserField({
        ...userField,
        [e.target.name]:e.target.value
    })
    console.log(userField);
  }

  const onsubmit=async(e)=>{
    e.preventDefault();
    try {

         const res= await axios.post("http://127.0.0.1:8000/api/adduser",userField)
        
         console.log("The response is ",res)  
        
    } catch (error) {
        console.log("The error is",error);
    }
  
  }
 

  return (
    <div class="grid grid-cols-6 gap-4">
  <div className='col-span-2'>

<form class="max-w-sm mx-auto">
    <div className='my-5 text-xl flex justify-center items-center font-bold'>Add User</div>
    <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
    <input type="text" name='name' onChange={e=>changeUserFieldHandler(e)} id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="endexu" required />
  </div>
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" name='email' onChange={e=>changeUserFieldHandler(e)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" name='password' onChange={e=>changeUserFieldHandler(e)} id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <button onClick={e=>onsubmit(e)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
</form>
</div>
 
  <div className='col-span-4'><List /></div>
</div>
   
  )
}
