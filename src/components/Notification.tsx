import React from 'react'
import check from '../../public/icons/check.svg'
import Image from 'next/image'
import clsx from 'clsx';
import { NOTIFICATION_STATUS } from '@/types/notificationTypes';

const STATUS_MAP: Record<NOTIFICATION_STATUS, string> = {
  success: "bg-successLight",
  error: "bg-errorLight",
  warning: "bg-warningLight",
  default: "bg-hivePurpleLight",
}

interface NotificationProps {
  message: string;
  status: NOTIFICATION_STATUS;
}

export default function Notification( {
  message,
  status,
} : NotificationProps ) {
  return (
    <div className={clsx('w-76 h-14 flex gap-4 items-center px-4 rounded-lg opacity-85 animate-notif_in', 
    STATUS_MAP[status],
    )}>
        <Image src={check} alt="Check Icon" width={20} height={20} className='h-5 w-5'/>
        <span>{message}</span>
    </div>
  )
}
