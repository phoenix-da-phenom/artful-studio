import { TextHeaderProps } from '@/lib/projectData'
import React from 'react'

export default function TextHeader({ style, className, children}:TextHeaderProps) {
  return (
    <h1
      style={style}
      className={`flex flex-col gap-3 ${className}`}
    >
      {children}
    </h1>
  )
}
