// CSS for responsive layout rules that can't be done with inline styles
// (media queries, ::-webkit-scrollbar, hover class toggling)
export const headerCss = `
  html, body { width: 100%; max-width: 100%; overflow-x: hidden; box-sizing: border-box; }
  *, *::before, *::after { box-sizing: border-box; }

  /* Inner row: logo | nav | actions — shrinks padding on mobile */
  .hdr-inner {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }
  @media (min-width: 768px) {
    .hdr-inner { padding: 0 1.5rem; height: 64px; }
  }

  /* Desktop nav — hidden on mobile, shown on tablet+ */
  .hdr-nav { display: none; }
  @media (min-width: 768px) {
    .hdr-nav { display: flex; gap: 1.75rem; align-items: center; }
  }

  /* "Host a Room" label — hidden on very small screens, shows "+" icon only */
  .hdr-host-label { display: none; }
  @media (min-width: 480px) { .hdr-host-label { display: inline; } }

  /* Sign In button — hidden below 480px to save space */
  .hdr-signin { display: none; }
  @media (min-width: 480px) { .hdr-signin { display: inline-flex; } }
`

export const headerNavItems = [] as const
export const headerAvatarLabel = 'A'
export const headerMenuAriaLabel = 'Open menu'
