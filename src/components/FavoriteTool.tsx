"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import { favoriteToolsProps } from '@/types/favoriteToolsTypes'
import clsx from 'clsx'



export default function FavoriteTool(favoriteToolsProps: favoriteToolsProps) {
  const [isConnected, setIsConnected] = useState(false)

  return (
    <div className="w-68.75 h-40 font-helvetica p-7.5 flex flex-col justify-center gap-2 bg-[#FEF9F8] border border-veryLightGrey rounded-lg z-10 hover:border-hivePurple">
      <div className="flex justify-between">
        <Image src={favoriteToolsProps.imagePath} alt="Figma Icon" width={27} height={27} className="h-[27px] w-fit"/>
        <button 
          className={clsx("w-25 text-xs leading-3.5 py-1.25 text-center rounded hover:border", 
            {"text-success bg-successLight font-satoshi hover:border hover:border-success" : isConnected},
            {"bg-white border border-veryLightGrey hover:border-hiveBlack": !isConnected},
          )}
          onClick={() => setIsConnected(!isConnected)}
        >
          { isConnected ? "Connected" : "Connect" }
        </button>
      </div>
      <h3 className="text-lg leading-5">{favoriteToolsProps.name}</h3>
      <p className="text-sm leading-3.75">{favoriteToolsProps.description}</p>
    </div>
  )
}
