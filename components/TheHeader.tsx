import Link from 'next/link'
import { Navigation } from './Navigation'

const navItems = [
  {label:"Home", href: '/'},{label: "Blog", href:'/blog'},{label:"About",href:'/about'}
]
export const TheHeader = () => {
  return (
    <header>
       <Navigation navLinks={navItems} />
        </header>
  )
}
