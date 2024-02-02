"use client";
import useNotification from '@/hooks/useNoficication'
import Notification from './Notification'
import Image from 'next/image'
import React from 'react'

export default function Navbar() {

  const Notify = () => {
    useNotification(<Notification message="Clicked Profile Icon 😎" status="default" />)
  }

  return (
    <nav className='h-25 px-18 flex justify-between items-center bg-white border-b border-whisper relative z-10'>
      <h2 className='font-satoshi text-3xs font-bold text-hivePurple'>hive</h2>
      <Image src="/icons/Fotor_AI 1.png" alt="user logo" width={48} height={48} className='w-12 h-12 rounded-full' onClick={Notify}/>
    </nav>
  )
}
