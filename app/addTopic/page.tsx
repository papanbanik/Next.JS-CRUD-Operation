"use client"
import React, { useState } from 'react'
import {useRouter} from "next/navigation"
const Page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const router = useRouter(); 
  const handleSubmit= async(e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      if(!title || !description)
      {
        alert("Title and description required");
        return; 
      }
      try{
      const res=await fetch('http://localhost:3000/api/topics',{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({title,description}),
      })
      if(res.ok)
      {
        router.push('/')
      }
      else{
        throw new Error("failed to create a topic")
      }
      
      }
      catch(error){
              console.log(error)
      }
    };
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3 mt-10'>
        <input 
        onChange={(e)=> setTitle(e.target.value)}
        value={title}
        className='border border-slate-500 px-8 py-2'
        type='text'
        placeholder='Topic Title'/>
        <input 
        onChange={(e)=> setDescription(e.target.value)}
        value={description}
        className='border border-slate-500 px-8 py-2'
        type='text'
        placeholder='Topic Description'/>

       <div><button type="submit" className='px-3 py-2 rounded text-white bg-green-600 cursor-pointer hover:bg-green-700'>Add Topics</button></div>
    </form>
  )
}
export default Page