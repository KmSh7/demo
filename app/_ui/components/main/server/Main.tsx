import React from 'react'

// Wraps all page content between the navbar and footer.
// Accepts children so any page can render inside it.
export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main style={{ minHeight: 'calc(100vh - 56px - 44px - 72px)', background: '#080608' }}>
      {children}
    </main>
  )
}
