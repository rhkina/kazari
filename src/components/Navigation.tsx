import Logo from './Logo'
import NavLinks from './NavLinks'

const Navigation = () => {
  return (
    <div className='flex h-full flex-col px-3 py-4 md:px-2'>
      <Logo />
      <div
        className='border-t -ml-3 md:ml-0 bg-background h-16 
      justify-evenly fixed z-50 flex-1 w-full md:relative md:h-full 
      bottom-0 md:border-none flex flex-row md:align-middle md:justify-start 
      space-x-2 md:flex-col md:space-x-0 md:space-y-2 p-2'
      >
        <NavLinks />
        {/* user && <ProfileLink /> */}

        <div>{/* <MoreDropDown /> */}</div>
      </div>
    </div>
  )
}

export default Navigation
