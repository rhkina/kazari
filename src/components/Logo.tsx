import Link from 'next/link'
import Image from 'next/image'
import { buttonVariants } from './ui/button'

const Logo = () => {
  return (
    <Link
      href={'/main'}
      className={buttonVariants({
        className: 'hidden md:flex !mb-10 lg:hover:bg-transparent lg:!p-0',
        variant: 'ghost',
        size: 'lg',
      })}>
      <Image src='/logo-light.svg' alt='logo' width={200} height={30} />
    </Link>
  )
}

export default Logo
