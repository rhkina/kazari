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
import { buttonVariants } from './ui/button'

const NavLinks = () => {
  const pathName = usePathname()
  return (
    <ul className='flex flex-col'>
      <TooltipProvider>
        {navOptions.map((navOption) => (
          <Tooltip delayDuration={0} key={navOption.name}>
            <TooltipTrigger>
              <li key={navOption.name} className=''>
                <Link
                  className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'w-full flex flex-row'
                  )}
                  href={navOption.href}>
                  <navOption.Component selected={pathName === navOption.href} />
                  {navOption.name}
                </Link>
              </li>
            </TooltipTrigger>
            <TooltipContent
              side='right'
              className='bg-background backdrop-blur-xl lg:hidden'>
              <p>{navOption.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </ul>
  )
}

export default NavLinks
