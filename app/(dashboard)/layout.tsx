import Navbar from '@/components/Navbar'
import React, { ReactNode } from 'react'

export default function layout({children}:{children:ReactNode}) {
  return (
    <div className='relative flex h-screen w-full flex-col'>
    <Navbar/>
    <div className='flex-grow w-full mx-auto'>
        {children}
    </div>
    </div>
  )
}
