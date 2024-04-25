'use client'

import { ModeToggle } from '@/components/ModeToggle'
import { Button } from '@/components/ui/button'
import React from 'react'

const MainPage = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-y-2'>
      <div>Main Page</div>
      <ModeToggle />
      <Button variant='default' className='rounded-full w-[200px]'>
        Button
      </Button>
    </div>
  )
}

export default MainPage
