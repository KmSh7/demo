export const categories = [
  

] as const

export const defaultActiveCategory = ''

export const navbarCss = `
  .navbar-scroll {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .navbar-scroll::-webkit-scrollbar { display: none; }

  @media (min-width: 768px) {
    .navbar-scroll { padding: 0 1.5rem; gap: 0.25rem; }
  }

  .nb-search { display: none; }
  @media (min-width: 640px) { .nb-search { display: flex; } }
`
