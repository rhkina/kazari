'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { sideNavOptions } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLinks = () => {
  const pathName = usePathname()
  return (
    <TooltipProvider>
      {sideNavOptions.map((sideNavOption) => (
        <ul key={sideNavOption.name}>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <li>
                <Link
                  href={sideNavOption.href}
                  className={cn(
                    'group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full p-[3px]',
                    {
                      'bg-foreground/50 ': pathName === sideNavOption.href,
                    }
                  )}>
                  <sideNavOption.Component
                    selected={pathName === sideNavOption.href}
                  />
                </Link>
              </li>
            </TooltipTrigger>
            <TooltipContent
              side='right'
              className='bg-background backdrop-blur-xl'>
              <p>{sideNavOption.name}</p>
            </TooltipContent>
          </Tooltip>
        </ul>
      ))}
    </TooltipProvider>
  )
}

export default NavLinks
