import { CSSProperties } from 'react'

// ── Outer <footer> wrapper ────────────────────────────────────────────────
// Very dark background, gold top border, pushes away from content above
export const footerStyle: CSSProperties = {
  background: '#0a080c',
  borderTop: '1px solid rgba(201,168,76,0.12)',
  marginTop: '4rem',
}

// ── Red film-strip decorative bar at top of footer ────────────────────────
export const filmStripStyle: CSSProperties = {
  height: '6px',
  background: 'repeating-linear-gradient(90deg, #8b1a1a 0px, #8b1a1a 16px, #080608 16px, #080608 28px)',
  opacity: 0.5,
}

// ── Inner content container — centers and pads everything ─────────────────
export const footerInnerStyle: CSSProperties = {
  maxWidth: '1400px',
  margin: '0 auto',
  padding: '3rem 1.5rem 2rem',
}

// ── Top section: brand column + link columns, wraps on small screens ───────
export const footerTopRowStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '3rem',
  justifyContent: 'space-between',
  marginBottom: '3rem',
}

// ── Brand column (logo + tagline + social icons) ──────────────────────────
export const brandColStyle: CSSProperties = {
  maxWidth: '260px',
}

// ── "REELROOM" logo text in footer ───────────────────────────────────────
export const footerLogoStyle: CSSProperties = {
  fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
  fontSize: '2rem',
  letterSpacing: '0.12em',
  color: '#f0e6ce',
  marginBottom: '0.75rem',
}

// ── Gold "ROOM" part of the footer logo ──────────────────────────────────
export const footerLogoAccentStyle: CSSProperties = {
  color: '#c9a84c',
}

// ── Tagline paragraph under logo ─────────────────────────────────────────
export const taglineStyle: CSSProperties = {
  fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
  fontSize: '0.95rem',
  color: 'rgba(232,221,208,0.45)',
  lineHeight: 1.8,
  fontStyle: 'italic',
}

// ── Row of small social icon buttons ─────────────────────────────────────
export const socialRowStyle: CSSProperties = {
  display: 'flex',
  gap: '0.75rem',
  marginTop: '1.25rem',
}

// ── Individual social icon box ────────────────────────────────────────────
export const socialIconStyle: CSSProperties = {
  width: '32px',
  height: '32px',
  border: '1px solid rgba(201,168,76,0.2)',
  borderRadius: '2px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
  fontSize: '0.7rem',
  color: 'rgba(201,168,76,0.5)',
  cursor: 'pointer',
}

// ── Section heading in a link column (e.g. "WATCH", "HOST") ──────────────
export const linkColHeadingStyle: CSSProperties = {
  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
  fontSize: '0.65rem',
  color: '#c9a84c',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  marginBottom: '1rem',
}

// ── Vertical list of links inside a column ───────────────────────────────
export const linkListStyle: CSSProperties = {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
}

// ── A single footer link (hover state is handled by the component) ────────
export const footerLinkStyle = (hovered: boolean): CSSProperties => ({
  fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
  fontSize: '0.95rem',
  color: hovered ? '#f0e6ce' : 'rgba(232,221,208,0.4)',
  textDecoration: 'none',
  transition: 'color 0.2s',
})

// ── Thin gold gradient divider line between top and bottom sections ────────
export const dividerStyle: CSSProperties = {
  height: '1px',
  background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)',
  marginBottom: '1.5rem',
}

// ── Bottom row: copyright + status indicator ──────────────────────────────
export const footerBottomRowStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  justifyContent: 'space-between',
  alignItems: 'center',
}

// ── Copyright text ────────────────────────────────────────────────────────
export const copyrightStyle: CSSProperties = {
  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
  fontSize: '0.65rem',
  color: 'rgba(232,221,208,0.25)',
  letterSpacing: '0.06em',
}

// ── "All systems operational" status row ─────────────────────────────────
export const statusRowStyle: CSSProperties = {
  display: 'flex',
  gap: '0.4rem',
  alignItems: 'center',
}

// ── Green pulsing dot indicating system is up ─────────────────────────────
export const statusDotStyle: CSSProperties = {
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  background: '#3ecf6e',
  boxShadow: '0 0 6px #3ecf6e',
}

// ── Status label text ─────────────────────────────────────────────────────
export const statusLabelStyle: CSSProperties = {
  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
  fontSize: '0.62rem',
  color: 'rgba(232,221,208,0.3)',
  letterSpacing: '0.06em',
}
