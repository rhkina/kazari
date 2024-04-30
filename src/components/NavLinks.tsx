'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { navOptions } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'

const NavLinks = () => {
  const pathName = usePathname()
  return (
    <ul className='flex flex-col'>
      <TooltipProvider>
        {navOptions.map((navOption) => (
          <Tooltip delayDuration={0} key={navOption.name}>
            <TooltipTrigger>
              <li key={navOption.name}>
                <Link
                  href={navOption.href}
                  className={cn(
                    'group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full p-[3px]',
                    {
                      'bg-foreground/50 ': pathName === navOption.href,
                    }
                  )}
                >
                  <Button variant={'ghost'}>
                    <navOption.Component
                      selected={pathName === navOption.href}
                    />
                  </Button>
                </Link>
              </li>
            </TooltipTrigger>
            <TooltipContent
              side='right'
              className='bg-background backdrop-blur-xl lg:hidden'
            >
              <p>{navOption.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </ul>
  )
}

export default NavLinks
