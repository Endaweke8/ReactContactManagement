import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const View = () => {
    const {id}=useParams();
    const [user,setuser]=useState([]);
    useEffect(()=>{
        fetchData();
      },[]);
    
      const fetchData=async()=>{
          try {
            const result=await axios.get("http://127.0.0.1:8000/api/user/"+id);
            setuser(result.data.user);
            console.log("The result is",result.data.user);
          } catch (error) {
            console.log("the error is ",result);
          }
      }
  return (
    <div>The user id is {id} the name is {user.name}</div>

  )
}
