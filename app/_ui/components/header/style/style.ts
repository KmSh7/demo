import { CSSProperties } from 'react'

// ── Outer <header> wrapper ────────────────────────────────────────────────
// Sticks to the top of the page; dark blurred background with a gold border
export const headerWrapperStyle: CSSProperties = {
  position: 'sticky',
  top: 0,
  zIndex: 50,
  background: 'linear-gradient(180deg, #080608 0%, rgba(8,6,8,0.95) 100%)',
  backdropFilter: 'blur(12px)',
  borderBottom: '1px solid rgba(201,168,76,0.15)',
  width: '100%',
}

// ── Decorative film-strip line at the very top of the header ─────────────
export const filmStripStyle: CSSProperties = {
  height: '3px',
  background: 'repeating-linear-gradient(90deg, #c9a84c 0px, #c9a84c 10px, transparent 10px, transparent 20px)',
  opacity: 0.3,
}

// ── Logo row: icon + "REELROOM" text ─────────────────────────────────────
export const logoWrapStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  flexShrink: 0,
}

// ── "REELROOM" text ───────────────────────────────────────────────────────
export const logoTextStyle: CSSProperties = {
  fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
  fontSize: '1.45rem',
  letterSpacing: '0.1em',
  color: '#f0e6ce',
  lineHeight: 1,
}

// ── Gold "ROOM" part of the logo ─────────────────────────────────────────
export const logoAccentStyle: CSSProperties = {
  color: '#c9a84c',
}

// ── Right-side action buttons row ────────────────────────────────────────
export const actionsRowStyle: CSSProperties = {
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
  flexShrink: 0,
}

// ── "Sign In" outline button ──────────────────────────────────────────────
export const signInBtnStyle: CSSProperties = {
  background: 'transparent',
  border: '1px solid rgba(201,168,76,0.3)',
  borderRadius: '2px',
  padding: '0.4rem 0.9rem',
  color: 'rgba(232,221,208,0.7)',
  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
  fontSize: '0.68rem',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  cursor: 'pointer',
}

// ── "Host a Room" filled red button ──────────────────────────────────────
export const hostBtnStyle: CSSProperties = {
  background: 'linear-gradient(135deg, #8b1a1a, #5a0e0e)',
  border: '1px solid rgba(201,168,76,0.2)',
  borderRadius: '2px',
  padding: '0.4rem 0.9rem',
  color: '#f0e6ce',
  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
  fontSize: '0.68rem',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  cursor: 'pointer',
  boxShadow: '0 2px 12px rgba(139,26,26,0.4)',
  whiteSpace: 'nowrap',
}

// ── User avatar circle (shows first letter of name) ───────────────────────
export const avatarStyle: CSSProperties = {
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #8b1a1a, #c9a84c)',
  border: '1.5px solid rgba(201,168,76,0.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
  fontSize: '0.8rem',
  color: '#f0e6ce',
  cursor: 'pointer',
  flexShrink: 0,
}

// ── Mobile nav drawer (slides down when hamburger is tapped) ─────────────
export const mobileDrawerStyle: CSSProperties = {
  background: '#100d12',
  borderTop: '1px solid rgba(201,168,76,0.1)',
  padding: '1rem 1.25rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}

// ── Each link inside the mobile drawer ───────────────────────────────────
export const mobileNavLinkStyle: CSSProperties = {
  fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
  fontSize: '1.1rem',
  color: 'rgba(232,221,208,0.7)',
  textDecoration: 'none',
  letterSpacing: '0.06em',
}

// ── Desktop nav link (normal / hovered states returned as a function) ─────
// Used inside the NavLink sub-component
export const navLinkStyle = (hovered: boolean): CSSProperties => ({
  fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
  fontSize: '0.95rem',
  fontWeight: 300,
  letterSpacing: '0.07em',
  color: hovered ? '#c9a84c' : 'rgba(232,221,208,0.6)',
  textDecoration: 'none',
  transition: 'color 0.2s',
  whiteSpace: 'nowrap',
})
