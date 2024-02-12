import React from 'react'
import Link from 'next/link';

const NavLinks = () => {
    
    const links = [
        {
            text: 'About',
            path: '/about'
        },
        {
            text: 'Blog',
            path: '/blog'
        },
        {
            text: 'Contact',
            path: '/contact'
        }
    ]

  return (
    links.map(link => (
        <Link href={link.path}>{link.text}</Link>
    ))
  )
}

export default NavLinks