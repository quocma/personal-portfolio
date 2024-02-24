'use client'
import { Home, User, FileText, Briefcase, Phone, Target } from 'react-feather';
import LinkButton from '../buttons/LinkButton';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

const navItems = [
  {
    name: 'Home',
    href: '/',
    icon: <Home />,
  },
  {
    name: 'About',
    href: '/about',
    icon: <User />,
  },
  {
    name: 'Resume',
    href: '/resume',
    icon: <FileText />,
  },
  {
    name: 'Works',
    href: '/works',
    icon: <Briefcase />,
  },
  {
    name: 'Target',
    href: '/target',
    icon: <Target />,
  },
  {
    name: 'Contacts',
    href: '/contacts',
    icon: <Phone />,
  },
]

const activeButtonLinkStyle = 'bg-c3-main text-white'

const MenuNavigation = () => {
  const pathName = usePathname();

  return (
    <nav>
      <ul className='flex justify-between items-center gap-4'>
        {navItems.map(item => {
          return <li key={item.href}>
            <LinkButton {...item} className={twMerge(
              'min-w-24',
              pathName === item.href ? activeButtonLinkStyle : '',
            )}  />
          </li>
        })}
      </ul>
    </nav>
  )
}

export default MenuNavigation