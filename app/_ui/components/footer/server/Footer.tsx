import React from 'react'
import FooterClient from '../client/FooterClient'

// Server component — delegates to FooterClient which needs useState for link hover.
export default function Footer() {
  return <FooterClient />
}
