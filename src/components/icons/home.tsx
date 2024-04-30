import { Home } from 'lucide-react'
type Props = { selected: boolean }

const HomeIcon = ({ selected }: Props) => {
  return (
    <div className='inline-flex gap-4 lg:ml-14'>
      <Home />
      <div className='hidden lg:block'>Home</div>
    </div>
  )
}

export default HomeIcon
