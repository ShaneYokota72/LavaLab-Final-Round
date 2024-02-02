"use client";
import React from 'react'
import Image from 'next/image'
import useNotification from '@/hooks/useNoficication';
import Notification from './Notification';

export default function Avatar({
    imagePath
}: { imagePath: string }) {

    const addNotification  = useNotification();

    const Notify = () => {
        addNotification(<Notification message="Clicked Profile Icon 😎" status="default" />);
    }

    return (
        <Image src={imagePath} alt="user logo" width={48} height={48} className='w-12 h-12 rounded-full hover:cursor-pointer' onClick={Notify}/>
    )
}
