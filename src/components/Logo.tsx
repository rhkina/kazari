import Link from 'next/link'
import Image from 'next/image'
import { buttonVariants } from './ui/button'

const Logo = () => {
  return (
    <div className='flex flex-col pt-2'>
      <Link
        href={'/main'}
        className={buttonVariants({
          className:
            'hidden md:flex !mb-5 lg:hover:bg-transparent lg:!p-0 md:!p-2',
          variant: 'ghost',
          size: 'lg',
        })}>
        <Image
          src='/logo-light.svg'
          alt='logo'
          width={180}
          height={34}
          className='hidden lg:block dark:hidden'
        />
        <Image
          src='/logo-dark.svg'
          alt='logo'
          width={180}
          height={34}
          className='hidden lg:dark:block'
        />
        <Image
          src='/kazari-logo.svg'
          alt='logo'
          width={40}
          height={40}
          className='lg:hidden'
        />
      </Link>
    </div>
  )
}

export default Logo
