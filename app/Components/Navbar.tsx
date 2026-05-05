"use client"
import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between sm:text-3xl bg-slate-800 py-4 px-4'>
        <Link href='/' className='text-white px-2'>GtCoding </Link>
        <Link href='/addTopic' className='bg-[#FFCE12] hover:bg-white px-4 py-1 rounded-full '>Add Topic</Link>
    </nav>
  )
}
export default Navbar