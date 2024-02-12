import React from 'react'
import { NavLinks } from '@/components'

const Navbar = () => {
  return (
    <div>
      <div className="logo"></div>
      <div className="links">
        <NavLinks />
      </div>
    </div>
  )
}

export default Navbar