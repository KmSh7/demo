import React from 'react'
import HeaderClient from '../client/HeaderClient'

// Server component — just passes rendering to the client component.
// Kept separate so Next.js can tree-shake server-only code if needed later.
export default function Header() {
  return <HeaderClient />
}
