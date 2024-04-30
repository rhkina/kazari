import HomeIcon from '@/components/icons/home'
import SettingsIcon from '@/components/icons/settings'
import DashboardIcon from '@/components/icons/dashboard'
export const navOptions = [
  {
    name: 'Home',
    Component: HomeIcon,
    href: '/main',
  },
  {
    name: 'Dashboard',
    Component: DashboardIcon,
    href: '/dashboard',
  },
  {
    name: 'Settings',
    Component: SettingsIcon,
    href: '/settings',
  },
]
