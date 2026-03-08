import React from 'react'
import NavbarClient from '../client/NavbarClient'

// Server component — delegates to NavbarClient which needs useState for active tab.
export default function Navbar() {
  return <NavbarClient />
}
