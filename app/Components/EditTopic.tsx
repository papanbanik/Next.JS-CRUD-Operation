"use client"
import { useState } from 'react';
import {useRouter} from "next/navigation"
type EditTopicProps = {
  id: string;
  title: string;
  description: string;
};
 const EditTopic = ({id,title,description} : EditTopicProps) => {
    const [Newtitle, setNewTitle] = useState(title);
    const [Newdescription, setNewDescription] = useState(description);
    const router= useRouter();
    const handleSubmit=async(e: React.FormEvent)=>{
    e.preventDefault();
     try{
      const res= await fetch(`https://daily-task-allocation.vercel.app/api/topics/${id}`,{
        method: "PUT",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        title: Newtitle,
       description: Newdescription,})
      });
      if(!res.ok)
      { 
        throw new Error("No found")
      }
      router.refresh();
        router.push("/");
     }
     catch(error){
       console.log(error)
     }
}
  return (
    <>
      <form onSubmit={handleSubmit}  className='flex flex-col gap-3 mt-10'>
        <input 
        onChange={(e)=> setNewTitle(e.target.value)}
        value={Newtitle}
        className='border border-slate-500 px-8 py-2'
        type='text'
        placeholder='Topic Title'/>
        <input 
        onChange={(e)=> setNewDescription(e.target.value)}
        value={Newdescription}
        className='border border-slate-500 px-8 py-2'
        type='text'
        placeholder='Topic Description'/>

       <div><button type="submit" className='px-3 py-2 rounded text-white bg-green-600 cursor-pointer hover:bg-green-700'>Update Topics</button></div>
    </form></>
  )
}
export default EditTopic
