import React from 'react'
import PageClient from './(dashboard)/PageClient'

// Root page ("/") — renders the main watch party landing page.
// PageClient is a client component because it uses state and browser events.
export default function Page() {
  return <PageClient />
}
