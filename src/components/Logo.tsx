import Link from 'next/link'
import Image from 'next/image'
import { buttonVariants } from './ui/button'

const Logo = () => {
  return (
    <div className='flex flex-col pt-2'>
      <Link
        href={'/main'}
        className={buttonVariants({
          className: 'hidden md:flex !mb-10 lg:hover:bg-transparent lg:!p-0',
          variant: 'ghost',
          size: 'lg',
        })}
      >
        <Image
          src='/logo-light.svg'
          alt='logo'
          width={180}
          height={34}
          className='block dark:hidden'
        />
        <Image
          src='/logo-dark.svg'
          alt='logo'
          width={180}
          height={34}
          className='hidden dark:block'
        />
      </Link>
    </div>
  )
}

export default Logo
