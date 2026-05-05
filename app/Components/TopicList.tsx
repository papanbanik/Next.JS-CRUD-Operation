export const dynamic = "force-dynamic";
import React from 'react'
import {HiOutlineTrash, HiPencilAlt} from 'react-icons/hi'
import  RemoveButton  from './RemoveButton';
import Link from 'next/link'
type Topic = {
  _id: string;
  title: string;
  description: string;
};
const getTopic = async () =>{
     try{
      const res = await fetch("/api/topics",{cache: "no-store"});
      if(!res.ok){
        throw new Error("Failed to fetch topics")
             }
      return await res.json();
     }
     catch(error)
     {
        console.log("Error loading topics: ",error)
     }
}
const TopicList = async () => {
const data = await getTopic();
const topics = data?.user || [];
  return (
    <>
    {topics.map((t:Topic) => (
    <div key={t._id} className='p-4 border border-slate-300 my-3 flex justify-between '>
     <div className='flex flex-col'>
        <h2 className='font-bold text-3xl'>{t.title}</h2>
        <h2>{t.description}</h2>
     </div>
       <div className='flex flex-row items-center gap-2'>
        <RemoveButton id={t._id} />
        <Link href={`/editTopic/${t._id}`}><HiPencilAlt size={24}/></Link>
       </div>
    </div>
    ))}
   
   </> 
  )
}
export default TopicList