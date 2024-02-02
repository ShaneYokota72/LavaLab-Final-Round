import React from 'react'
import check from '../../public/icons/check.svg'
import Image from 'next/image'
import clsx from 'clsx';
import { notificationStatus } from '@/types/notificationTypes';

interface NotificationProps {
    message: string;
    status: notificationStatus;
}

export default function Notification( {
    message,
    status,
} : NotificationProps ) {
  return (
    <div className={clsx('w-64 h-14 flex gap-4 items-center px-4 rounded-lg opacity-85', 
    {"bg-successLight": status === "success"},
    {"bg-errorLight": status === "error"}, 
    {"bg-warningLight": status === "warning"},
    {"bg-hivePurpleLight": status === "default"},
    )}>
        <Image src={check} alt="Check Icon" width={20} height={20} className='h-5 w-5'/>
        <span>{message}</span>
    </div>
  )
}
