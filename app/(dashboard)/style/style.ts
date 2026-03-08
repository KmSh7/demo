import { CSSProperties } from 'react'

// ─────────────────────────────────────────────────────────────────────────
// PAGE-LEVEL STYLES
// These are imported by PageClient.tsx and used in the style={} props.
// Styles that need media queries live in the `pageCss` string in PageClient.
// ─────────────────────────────────────────────────────────────────────────

// ── HERO SECTION ──────────────────────────────────────────────────────────

// Outer hero section — fills screen width, aligns content to bottom
export const heroSectionStyle = (isMobile: boolean): CSSProperties => ({
  position: 'relative',
  minHeight: isMobile ? '420px' : '520px',
  display: 'flex',
  alignItems: 'flex-end',
  overflow: 'hidden',
  width: '100%',
})

// Left red curtain wing (decorative)
export const curtainLeftStyle: CSSProperties = {
  position: 'absolute',
  top: 0, left: 0, bottom: 0,
  background: 'linear-gradient(90deg, #5a0e0e 0%, #8b1a1a 60%, transparent 100%)',
  opacity: 0.6,
  pointerEvents: 'none',
  zIndex: 2,
}

// Right red curtain wing (decorative, mirrored)
export const curtainRightStyle: CSSProperties = {
  position: 'absolute',
  top: 0, right: 0, bottom: 0,
  background: 'linear-gradient(270deg, #5a0e0e 0%, #8b1a1a 60%, transparent 100%)',
  opacity: 0.6,
  pointerEvents: 'none',
  zIndex: 2,
}

// Vertical fold lines on the curtains — positioned dynamically by offset
export const curtainFoldStyle = (side: 'left' | 'right', offset: number): CSSProperties => ({
  position: 'absolute',
  top: 0, bottom: 0,
  [side]: `${offset}px`,
  width: '2px',
  background: 'linear-gradient(180deg, rgba(90,14,14,0.8), rgba(90,14,14,0.3), rgba(90,14,14,0.7))',
  pointerEvents: 'none',
  zIndex: 3,
})

// Purple/dark radial gradient overlay in the center of the hero
export const heroGlowOverlayStyle: CSSProperties = {
  position: 'absolute',
  inset: 0,
  background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(50,30,60,0.6) 0%, transparent 70%)',
  zIndex: 1,
}

// Black gradient that fades the hero into the page below it
export const heroBottomFadeStyle: CSSProperties = {
  position: 'absolute',
  bottom: 0, left: 0, right: 0,
  height: '180px',
  background: 'linear-gradient(0deg, #080608 0%, transparent 100%)',
  zIndex: 1,
}

// Giant background emoji — purely decorative, very faint
export const heroBgEmojiStyle = (isMobile: boolean): CSSProperties => ({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: isMobile ? '7rem' : '12rem',
  opacity: 0.07,
  zIndex: 0,
  userSelect: 'none',
})

// ── HERO CONTENT ──────────────────────────────────────────────────────────

// Small gold "Featured Tonight" label above the title
export const heroEyebrowStyle: CSSProperties = {
  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
  fontSize: '0.6rem',
  color: '#c9a84c',
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  marginBottom: '0.6rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
}

// Short gold line decoration before the eyebrow text
export const eyebrowLineStyle: CSSProperties = {
  width: '20px',
  height: '1px',
  background: '#c9a84c',
  opacity: 0.6,
}

// Main hero movie title
export const heroTitleStyle = (isMobile: boolean): CSSProperties => ({
  fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
  fontSize: isMobile ? '2.8rem' : 'clamp(2.8rem, 6vw, 5.5rem)',
  letterSpacing: '0.06em',
  color: '#f0e6ce',
  lineHeight: 1,
  marginBottom: '0.4rem',
  textShadow: '0 4px 40px rgba(0,0,0,0.8)',
})

// Italic subtitle below the title — hidden on mobile
export const heroSubtitleStyle: CSSProperties = {
  fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
  fontSize: '1.05rem',
  fontStyle: 'italic',
  color: 'rgba(240,230,206,0.55)',
  marginBottom: '1rem',
}

// Each piece of meta info (year, rating, runtime)
export const heroMetaItemStyle: CSSProperties = {
  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
  fontSize: '0.62rem',
  color: 'rgba(240,230,206,0.45)',
  letterSpacing: '0.07em',
}

// Thin vertical divider between meta items
export const metaDividerStyle: CSSProperties = {
  width: '1px',
  height: '12px',
  background: 'rgba(201,168,76,0.3)',
}

// "3,841 watching" gold text in the meta row
export const heroViewerCountStyle: CSSProperties = {
  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
  fontSize: '0.62rem',
  color: '#c9a84c',
  letterSpacing: '0.07em',
}

// ── HERO BUTTON (primary + secondary variants) ────────────────────────────

// Primary (red) hero button — normal and hovered state
export const heroBtnPrimaryStyle = (hovered: boolean): CSSProperties => ({
  background: hovered
    ? 'linear-gradient(135deg, #a82020, #6b1010)'
    : 'linear-gradient(135deg, #8b1a1a, #6b1010)',
  border: '1px solid rgba(201,168,76,0.25)',
  borderRadius: '2px',
  padding: '0.7rem 1.5rem',
  color: '#f0e6ce',
  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
  fontSize: '0.7rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  cursor: 'pointer',
  boxShadow: '0 4px 20px rgba(139,26,26,0.4)',
  transition: 'all 0.2s',
})

// Secondary (gold outline) hero button — normal and hovered state
export const heroBtnSecondaryStyle = (hovered: boolean): CSSProperties => ({
  background: hovered ? 'rgba(201,168,76,0.15)' : 'rgba(201,168,76,0.06)',
  border: '1px solid rgba(201,168,76,0.3)',
  borderRadius: '2px',
  padding: '0.7rem 1.5rem',
  color: '#c9a84c',
  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
  fontSize: '0.7rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  cursor: 'pointer',
  transition: 'all 0.2s',
})

// ── MARQUEE STRIP ─────────────────────────────────────────────────────────

// Full-width dark bar that contains the scrolling film titles
export const marqueeWrapStyle: CSSProperties = {
  borderTop: '1px solid rgba(201,168,76,0.12)',
  borderBottom: '1px solid rgba(201,168,76,0.12)',
  background: '#100d12',
  padding: '0.55rem 0',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  width: '100%',
}

// The inner row that actually animates (slides left forever)
export const marqueeInnerStyle: CSSProperties = {
  display: 'inline-flex',
  gap: '2.5rem',
  animation: 'marqueeScroll 24s linear infinite',
}

// Each film title in the marquee
export const marqueeTitleStyle: CSSProperties = {
  fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
  fontSize: '0.85rem',
  fontStyle: 'italic',
  color: 'rgba(201,168,76,0.4)',
  letterSpacing: '0.05em',
}

// The "✦" separator between titles
export const marqueeDotStyle: CSSProperties = {
  marginLeft: '2.5rem',
  color: 'rgba(201,168,76,0.2)',
}

// ── STATS SECTION ─────────────────────────────────────────────────────────

// Stat number (big gold text like "18,492")
export const statValueStyle = (isMobile: boolean): CSSProperties => ({
  fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
  fontSize: isMobile ? '1.8rem' : '2.2rem',
  color: '#c9a84c',
  letterSpacing: '0.06em',
  lineHeight: 1,
  textShadow: '0 0 18px rgba(201,168,76,0.3)',
})

// Stat label below the number (e.g. "WATCHING NOW")
export const statLabelStyle: CSSProperties = {
  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
  fontSize: '0.58rem',
  color: 'rgba(232,221,208,0.35)',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  marginTop: '0.25rem',
}

// Each stat cell background
export const statCellStyle: CSSProperties = {
  background: '#16121a',
  padding: '1rem 1.25rem',
  textAlign: 'center',
}

// ── ROOMS SECTION HEADER ──────────────────────────────────────────────────

// Row above the rooms grid: section title + "View All" link
export const roomsHeaderRowStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  marginBottom: '1.25rem',
  flexWrap: 'wrap',
  gap: '0.5rem',
}

// "LIVE NOW" eyebrow label
export const roomsEyebrowStyle: CSSProperties = {
  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
  fontSize: '0.58rem',
  color: '#c9a84c',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  marginBottom: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
}

// Small red dot next to "LIVE NOW"
export const roomsLiveDotStyle: CSSProperties = {
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  background: '#e03c3c',
  boxShadow: '0 0 5px #e03c3c',
}

// "Active Watch Rooms" heading
export const roomsHeadingStyle = (isMobile: boolean): CSSProperties => ({
  fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
  fontSize: isMobile ? '1.4rem' : '1.7rem',
  fontWeight: 400,
  color: '#f0e6ce',
  fontStyle: 'italic',
})

// "View All →" link
export const viewAllLinkStyle: CSSProperties = {
  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
  fontSize: '0.6rem',
  color: 'rgba(201,168,76,0.6)',
  textDecoration: 'none',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
}

// ── ROOM CARD ─────────────────────────────────────────────────────────────

// Card outer wrapper — lifts and glows on hover
export const roomCardStyle = (hovered: boolean): CSSProperties => ({
  background: 'linear-gradient(145deg, #1e1824, #16121a)',
  border: `1px solid ${hovered ? 'rgba(201,168,76,0.35)' : 'rgba(201,168,76,0.1)'}`,
  borderRadius: '4px',
  overflow: 'hidden',
  cursor: 'pointer',
  transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
  boxShadow: hovered ? '0 12px 40px rgba(0,0,0,0.6)' : 'none',
  transition: 'transform 0.25s ease, border-color 0.25s, box-shadow 0.25s',
})

// Thumbnail area — dark gradient background behind the emoji poster
export const cardThumbStyle: CSSProperties = {
  height: '130px',
  background: 'linear-gradient(135deg, #1a1020, #0e0812)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '3rem',
  position: 'relative',
  overflow: 'hidden',
}

// Dark vignette over the thumbnail (makes edges darker)
export const cardThumbVignetteStyle: CSSProperties = {
  position: 'absolute',
  inset: 0,
  background: 'radial-gradient(ellipse at center, transparent 40%, rgba(8,6,8,0.7) 100%)',
}

// Colored tag badge (e.g. "LIVE", "8 PM", "POPULAR")
export const cardTagStyle = (tagColor: string): CSSProperties => ({
  position: 'absolute',
  top: '0.5rem', right: '0.5rem',
  background: tagColor,
  padding: '0.18rem 0.45rem',
  borderRadius: '2px',
  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
  fontSize: '0.58rem',
  letterSpacing: '0.1em',
  color: '#fff',
})

// Viewer count badge (top-left of thumbnail)
export const cardViewerBadgeStyle: CSSProperties = {
  position: 'absolute',
  top: '0.5rem', left: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',
  background: 'rgba(8,6,8,0.75)',
  padding: '0.18rem 0.45rem',
  borderRadius: '2px',
}

// Red dot inside the viewer count badge
export const cardViewerDotStyle: CSSProperties = {
  width: '5px',
  height: '5px',
  borderRadius: '50%',
  background: '#e03c3c',
  boxShadow: '0 0 5px #e03c3c',
}

// Viewer count number text
export const cardViewerCountStyle: CSSProperties = {
  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
  fontSize: '0.58rem',
  color: '#f0e6ce',
}

// Card body padding area
export const cardBodyStyle: CSSProperties = {
  padding: '0.85rem 0.9rem',
}

// Movie title in the card
export const cardTitleStyle: CSSProperties = {
  fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
  fontSize: '1rem',
  fontWeight: 600,
  color: '#f0e6ce',
  marginBottom: '0.2rem',
  lineHeight: 1.3,
}

// Genre + year label below the title
export const cardGenreStyle: CSSProperties = {
  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
  fontSize: '0.6rem',
  color: 'rgba(201,168,76,0.6)',
  letterSpacing: '0.06em',
  marginBottom: '0.55rem',
  textTransform: 'uppercase',
}

// Row with host info on the left and runtime on the right
export const cardFooterRowStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

// Host avatar circle (shows first letter of host name)
export const cardHostAvatarStyle: CSSProperties = {
  width: '18px',
  height: '18px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #8b1a1a, #c9a84c)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
  fontSize: '0.58rem',
  color: '#f0e6ce',
}

// Host name text
export const cardHostNameStyle: CSSProperties = {
  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
  fontSize: '0.6rem',
  color: 'rgba(232,221,208,0.4)',
}

// Runtime text (e.g. "2h 44m")
export const cardRuntimeStyle: CSSProperties = {
  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
  fontSize: '0.58rem',
  color: 'rgba(232,221,208,0.3)',
}

// "Join Room →" button at the bottom of each card
export const joinBtnStyle = (hovered: boolean): CSSProperties => ({
  width: '100%',
  marginTop: '0.7rem',
  padding: '0.5rem',
  background: hovered ? 'rgba(139,26,26,0.55)' : 'rgba(139,26,26,0.25)',
  border: '1px solid rgba(139,26,26,0.5)',
  borderRadius: '2px',
  color: '#f0e6ce',
  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
  fontSize: '0.62rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  cursor: 'pointer',
  transition: 'background 0.2s',
})

// ── HOST CTA BANNER ───────────────────────────────────────────────────────

// Outer card of the "Open Your Screening Room" CTA
export const ctaBannerStyle: CSSProperties = {
  background: 'linear-gradient(135deg, #16121a 0%, #1e1020 50%, #16121a 100%)',
  border: '1px solid rgba(201,168,76,0.2)',
  borderRadius: '4px',
  position: 'relative',
  overflow: 'hidden',
}

// Thin red accent stripe on the left edge of the CTA card
export const ctaAccentLeftStyle: CSSProperties = {
  position: 'absolute',
  left: 0, top: 0, bottom: 0,
  width: '5px',
  background: 'linear-gradient(180deg, #8b1a1a, #5a0e0e, #8b1a1a)',
}

// Thin red accent stripe on the right edge of the CTA card
export const ctaAccentRightStyle: CSSProperties = {
  position: 'absolute',
  right: 0, top: 0, bottom: 0,
  width: '5px',
  background: 'linear-gradient(180deg, #8b1a1a, #5a0e0e, #8b1a1a)',
}

// Large faint 🎬 emoji in the background of the CTA (desktop only)
export const ctaBgEmojiStyle: CSSProperties = {
  position: 'absolute',
  right: '3rem',
  top: '50%',
  transform: 'translateY(-50%)',
  fontSize: '7rem',
  opacity: 0.05,
  pointerEvents: 'none',
  userSelect: 'none',
}

// Small gold "Host Your Own" eyebrow label
export const ctaEyebrowStyle: CSSProperties = {
  fontFamily: "var(--font-mono, 'DM Mono', monospace)",
  fontSize: '0.6rem',
  color: '#c9a84c',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  marginBottom: '0.5rem',
}

// Main CTA heading ("OPEN YOUR PRIVATE SCREENING ROOM")
export const ctaHeadingStyle = (isMobile: boolean): CSSProperties => ({
  fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
  fontSize: isMobile ? '1.9rem' : 'clamp(1.8rem, 3vw, 2.6rem)',
  letterSpacing: '0.06em',
  color: '#f0e6ce',
  lineHeight: 1.1,
  marginBottom: '0.5rem',
})

// Supporting text below the CTA heading
export const ctaBodyStyle = (isMobile: boolean): CSSProperties => ({
  fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
  fontSize: isMobile ? '0.9rem' : '1rem',
  fontStyle: 'italic',
  color: 'rgba(240,230,206,0.45)',
})
