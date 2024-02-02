"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import { FAVORITE_TOOLS_METADATA } from '@/types/favoriteToolsTypes'
import clsx from 'clsx'
import useNotification from '@/hooks/useNoficication';
import Notification from './Notification';

const DELAY_MAP: Record<number, string> = {
  0: "animate-favtool_in",
  25: "animate-favtool_in-25",
  50: "animate-favtool_in-50",
  75: "animate-favtool_in-75",
  100: "animate-favtool_in-100",
  125: "animate-favtool_in-125",
  150: "animate-favtool_in-150",
  175: "animate-favtool_in-175",
}

export default function FavoriteTool({
  name,
  description,
  imagePath,
  delay = 0,
}: FAVORITE_TOOLS_METADATA) {
  const addNotification  = useNotification();
  const [isConnected, setIsConnected] = useState(false)

  const onConnect = () => {
    setIsConnected(!isConnected)

    // create the notification message and status
    const notificationMessage = isConnected ? `Disconnected from ${name}` : `Connected to ${name} 🚀`
    const notificationStatus = isConnected ? "warning" : "success"

    // send the notification
    addNotification(<Notification message={notificationMessage} status={notificationStatus} />)
  }

  return (
    <div className={clsx("w-72 h-40 font-helvetica p-7.5 flex flex-col justify-center gap-2 bg-[#FEF9F8] border border-veryLightGrey rounded-lg z-10 hover:border-hivePurple opacity-0", DELAY_MAP[delay])}>
      
      <div className="flex justify-between">
        <Image src={imagePath} alt="Figma Icon" width={27} height={27} className="h-[27px] w-auto"/>
        <button 
          className={clsx("w-25 text-xs leading-3.5 py-1.25 text-center rounded hover:border", 
            {"text-success bg-successLight font-satoshi hover:border hover:border-success" : isConnected},
            {"bg-white border border-veryLightGrey hover:border-hiveBlack": !isConnected},
          )}
          onClick={onConnect}
        >
          { isConnected ? "Connected" : "Connect" }
        </button>
      </div>

      <h3 className="text-lg leading-5">{name}</h3>

      <p className="text-sm leading-3.75">{description}</p>
    </div>
  )
}
