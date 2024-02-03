"use client"
import useNotification from '@/hooks/useNoficication';
import clsx from 'clsx';
import React from 'react'

interface ButtonProps {
    text: string;
    dark?: boolean;
    className?: string;
    notificationElement: React.ReactElement;
}

export default function Button( {
    text,
    dark = false,
    className,
    notificationElement,
} : ButtonProps) {
    const addNotification  = useNotification();

    // Function to send notification
    const Nofity = () => {
        addNotification(notificationElement);
    }

    return (
        <button  
            className={clsx("flex items-center justify-center h-14 w-28 font-bold font-plusJakartaSans text-center text-lg leading-6 rounded-lxl transition-all duration-500 ease-out",
            {"bg-hiveBlack text-white": dark},
            {"bg-white text-hiveBlack border border-veryLightGrey": !dark},
            {"hover:bg-hiveBlack hover:text-white hover:border-hiveBlack": !dark},
            {"hover:bg-white hover:text-hiveBlack hover:border hover:border-veryLightGrey": dark},  
            className
            )}
            onClick={Nofity}
        >
            {text}
        </button>
    )
}
