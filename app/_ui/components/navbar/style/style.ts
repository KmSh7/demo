import { CSSProperties } from 'react'

// ── Outer navbar wrapper bar ──────────────────────────────────────────────
// Dark strip sitting just below the header
export const navbarWrapperStyle: CSSProperties = {
  background: '#100d12',
  borderBottom: '1px solid rgba(201,168,76,0.1)',
  width: '100%',
}

// ── Red pulsing "LIVE" dot ────────────────────────────────────────────────
export const liveDotStyle: CSSProperties = {
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  background: '#e03c3c',
  boxShadow: '0 0 7px rgba(224,60,60,0.8)',
}

// ── "LIVE" text label next to the dot ────────────────────────────────────
export const liveLabelStyle: CSSProperties = {
  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
  fontSize: '0.6rem',
  color: '#e03c3c',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
}

// ── Container that holds the dot + "LIVE" text ───────────────────────────
export const liveIndicatorStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.35rem',
  marginRight: '0.75rem',
  flexShrink: 0,
}

// ── A single category button (active or inactive state) ───────────────────
// Returns different styles based on whether this tab is selected
export const categoryBtnStyle = (isActive: boolean): CSSProperties => ({
  background: isActive ? 'rgba(139,26,26,0.35)' : 'transparent',
  border: isActive ? '1px solid rgba(139,26,26,0.6)' : '1px solid transparent',
  borderRadius: '2px',
  padding: '0.5rem 0.85rem',
  color: isActive ? '#f0e6ce' : 'rgba(232,221,208,0.45)',
  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
  fontSize: '0.65rem',
  letterSpacing: '0.07em',
  textTransform: 'uppercase',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  flexShrink: 0,
  transition: 'all 0.2s',
})

// ── Search box container (desktop only, hidden on mobile via CSS) ─────────
export const searchBoxStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  border: '1px solid rgba(201,168,76,0.15)',
  borderRadius: '2px',
  background: 'rgba(201,168,76,0.04)',
  width: "20vw"
}

// ── Placeholder text inside search box ───────────────────────────────────
export const searchPlaceholderStyle: CSSProperties = {
  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
  fontSize: '0.62rem',
  color: 'rgba(232,221,208,0.3)',
  letterSpacing: '0.05em',
  width: '100%',
}

// ── Wrapper that pushes search to the far right ───────────────────────────
export const searchWrapStyle: CSSProperties = {
  marginLeft: 'auto',
  flexShrink: 0,
  alignItems: 'center'
}
