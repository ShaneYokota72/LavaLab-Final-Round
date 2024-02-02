import React from 'react'
import Avatar from './Avatar';

export default function Navbar() {
  return (
    <nav className='h-25 px-18 flex justify-between items-center bg-white border-b border-whisper relative z-10'>
      <h2 className='font-satoshi text-3xs font-bold text-hivePurple'>hive</h2>
      <Avatar imagePath="/icons/Fotor_AI 1.png"/>
    </nav>
  )
}
