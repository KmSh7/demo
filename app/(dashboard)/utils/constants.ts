// ── Static data ───────────────────────────────────────────────────────────

// Watch rooms shown in the grid
export const rooms = [
  { id: 1, title: 'Blade Runner 2049',                 genre: 'Sci-Fi',          viewers: 842,  host: 'nova_rex',   thumb: '🌆', tag: 'LIVE',    tagColor: '#e03c3c', runtime: '2h 44m', year: 2017 },
  { id: 2, title: 'Portrait of a Lady on Fire',        genre: 'Drama',           viewers: 214,  host: 'celeste_w',  thumb: '🔥', tag: 'LIVE',    tagColor: '#e03c3c', runtime: '2h 2m',  year: 2019 },
  { id: 3, title: 'Annihilation',                      genre: 'Sci-Fi · Horror', viewers: 511,  host: 'drift_a',    thumb: '🌿', tag: 'LIVE',    tagColor: '#e03c3c', runtime: '1h 55m', year: 2018 },
  { id: 4, title: 'The Grand Budapest Hotel',          genre: 'Comedy',          viewers: 673,  host: 'm_gustave',  thumb: '🏨', tag: '8 PM',    tagColor: '#c9a84c', runtime: '1h 39m', year: 2014 },
  { id: 5, title: 'Mulholland Drive',                  genre: 'Mystery · Drama', viewers: 389,  host: 'dr_eleanor', thumb: '🌃', tag: '9 PM',    tagColor: '#c9a84c', runtime: '2h 27m', year: 2001 },
  { id: 6, title: 'Everything Everywhere All at Once', genre: 'Action · Sci-Fi', viewers: 1204, host: 'evelyn_w',   thumb: '🥯', tag: 'POPULAR', tagColor: '#6e9ef5', runtime: '2h 19m', year: 2022 },
]

// The single featured film shown in the hero
export const featured = {
  title: 'Dune: Part Two',
  subtitle: 'A journey through the sands of Arrakis',
  genre: 'Epic Sci-Fi',
  year: '2024',
  rating: 'PG-13',
  runtime: '2h 46m',
  viewers: '3,841',
  rooms: 12,
}

// Titles scrolling in the marquee strip
export const marqueeItems = [
  'Dune: Part Two', 'Oppenheimer', 'Past Lives', 'Poor Things',
  'The Holdovers', 'Killers of the Flower Moon', 'The Zone of Interest', 'American Fiction',
]

export const stats = [
  { label: 'Active Rooms', value: '284' },
  { label: 'Watching Now', value: '18,492' },
  { label: 'Films', value: '12,000+' },
  { label: 'Communities', value: '3,200' },
]

// ── Responsive CSS ────────────────────────────────────────────────────────
// Only things that need media queries belong here;
// all other visual styles are in ./style/style.ts
export const pageCss = `
  html, body { width: 100%; max-width: 100%; overflow-x: hidden; }

  /* Centers content and adds responsive horizontal padding */
  .rr-wrap {
    width: 100%;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    box-sizing: border-box;
  }

  /* Hero text area — more padding on larger screens */
  .hero-inner {
    position: relative;
    z-index: 4;
    width: 100%;
    padding: 1.5rem 1.25rem 2.5rem;
    box-sizing: border-box;
  }
  @media (min-width: 640px)  { .hero-inner { padding: 2rem 3rem 3rem; } }
  @media (min-width: 1024px) { .hero-inner { padding: 2rem 5rem 3rem; } }

  /* Curtain fold lines — only visible on screens 640px+ */
  .curtain-fold { display: none; }
  @media (min-width: 640px) { .curtain-fold { display: block; } }

  /* Curtain wings — thinner on mobile, wider on desktop */
  .curtain-left  { width: 40px  !important; }
  .curtain-right { width: 40px  !important; }
  @media (min-width: 640px)  { .curtain-left { width: 80px  !important; } .curtain-right { width: 80px  !important; } }
  @media (min-width: 1024px) { .curtain-left { width: 120px !important; } .curtain-right { width: 120px !important; } }

  /* Stats: 2-column on mobile, 4-column on tablet+ */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5px;
    background: rgba(201,168,76,0.08);
    border-radius: 4px;
    overflow: hidden;
  }
  @media (min-width: 640px) { .stats-grid { grid-template-columns: repeat(4, 1fr); } }

  /* Rooms: 1 col → 2 col → 3 col as screen grows */
  .rooms-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
  @media (min-width: 480px) { .rooms-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 900px) { .rooms-grid { grid-template-columns: repeat(3, 1fr); } }

  /* CTA inner: stacked on mobile, side-by-side on tablet+ */
  .cta-inner { display: flex; flex-direction: column; gap: 1.5rem; padding: 2rem 1.5rem; }
  @media (min-width: 768px) { .cta-inner { flex-direction: row; align-items: center; justify-content: space-between; padding: 2.5rem 3rem; } }

  /* Meta row in hero — wraps on mobile */
  .hero-meta { display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; margin-bottom: 1.5rem; }

  /* Hero CTA buttons: stacked on very small, side-by-side on 400px+ */
  .hero-buttons { display: flex; flex-direction: column; gap: 0.65rem; width: 100%; }
  @media (min-width: 400px) { .hero-buttons { flex-direction: row; width: auto; } }

  /* CTA buttons: full-width on mobile, fixed width on tablet */
  .cta-buttons { display: flex; flex-direction: column; gap: 0.75rem; width: 100%; }
  @media (min-width: 768px) { .cta-buttons { width: 200px; } }

  /* Buttons that expand to full width only on small screens */
  .btn-full-mobile { width: 100%; text-align: center; }
  @media (min-width: 400px) { .btn-full-mobile { width: auto; } }
`
