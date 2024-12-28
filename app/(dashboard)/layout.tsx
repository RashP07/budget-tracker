import Navbar from '@/components/Navbar'
import React, { ReactNode } from 'react'

export default function layout({children}:{children:ReactNode}) {
  return (
    <div className='relative flex h-screen w-full flex-col'>
    <Navbar/>
    <div className='flex-grow w-full px-4 md:px-8'>
        {children}
    </div>
    </div>
  )
}
