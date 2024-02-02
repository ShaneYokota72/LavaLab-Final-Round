"use client"
import useNotification from '@/hooks/useNoficication';
import clsx from 'clsx';
import React from 'react'

interface ButtonProps {
    text: string;
    dark?: boolean;
    className?: string;
    notificationElement?: React.ReactElement;
}

export default function Button( {
    text,
    dark = false,
    className,
    notificationElement,
} : ButtonProps) {

    // Function to send notification
    const nofity = () => {
        if (notificationElement) {
            useNotification(notificationElement);
        }
    }

  return (
    <button  
        className={clsx("flex items-center justify-center h-14 w-28 font-bold font-plusJakartaSans text-center text-lg leading-6 rounded-lxl",
        {"bg-hiveBlack text-white": dark},
        {"bg-white text-hiveBlack border border-veryLightGrey": !dark},
        className
        )}
        onClick={nofity}
    >
        {text}
    </button>
  )
}
