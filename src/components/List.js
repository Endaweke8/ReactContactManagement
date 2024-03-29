import React, { useEffect, useState } from 'react'
import axios from "axios"
import { NavLink } from 'react-router-dom';

export const List = () => {
    const [userData,setUserData]=useState([]);
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async()=>{
      try {
        const result=await axios("http://127.0.0.1:8000/api/user");
       
        setUserData(result.data.user);
        console.log("The result is",result.data.user);
      } catch (error) {
        console.log("the error is ",result);
      }
  }

  const handleDelete=async(id)=>{
    await axios.delete(`http://127.0.0.1:8000/api/userdelete/`+id)
    const newUserData=userData.filter((item)=>{
       return (
          item.id !==id
           )
     })
     setUserData(newUserData);
  }

  return (

  

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                   No
                </th>
                <th scope="col" class="px-6 py-3">
                   Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                   Action
                </th>
                {/* <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th> */}
            </tr>
        </thead>
        <tbody>
            {
                userData.map((user,i)=>{
                   return(
                    <tr key={i} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {user.id}
                    </th>
                    <td class="px-6 py-4">
                        {user.name}
                    </td>
                    <td class="px-6 py-4">
                        {user.email}
                    </td>
                    <td class="px-6 py-4">
                        $2999
                    </td>
                    <td class="px-6 py-4 text-right">
                        <NavLink to={`/view/${user.id}`} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">view</NavLink>
                        <NavLink to={`/edit/${user.id}`} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</NavLink>
                        <button onClick={()=>handleDelete(user.id)} class="font-medium text-red-600 dark:text-blue-500 hover:underline">Delete</button>

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
