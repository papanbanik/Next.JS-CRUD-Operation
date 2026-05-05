"use client"
import {useRouter} from "next/navigation"
import {HiOutlineTrash} from "react-icons/hi";
type Topic = 
{
  id: string;
};
const RemoveButton = ({id}:Topic) => {
    const router=useRouter();
    const removeTopic=async()=>{
        const confirmed = confirm("Are you sure?");
        if(confirmed){
          const BASE_URL =process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
         const res =  await fetch(`${BASE_URL}/api/topics?id=${id}`,{method: "DELETE",})
        if(res.ok)
          {
           router.refresh();
          }
        }}
  return (
    <>
  <button onClick={removeTopic}>
  <HiOutlineTrash size={24} className='text-red-400 cursor-pointer' />
  </button>
    </>
  )
}

export default RemoveButton