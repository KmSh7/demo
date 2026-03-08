'use client'
import React, { useState } from 'react'
import {
  footerStyle,
  filmStripStyle,
  footerInnerStyle,
  footerTopRowStyle,
  brandColStyle,
  footerLogoStyle,
  footerLogoAccentStyle,
  taglineStyle,
  socialRowStyle,
  socialIconStyle,
  linkColHeadingStyle,
  linkListStyle,
  footerLinkStyle,
  dividerStyle,
  footerBottomRowStyle,
  copyrightStyle,
  statusRowStyle,
  statusDotStyle,
  statusLabelStyle,
} from '../style/style'
import { footerLinks } from '../utils/constants'


// ── FooterLink: a single link that turns lighter on hover ─────────────────
function FooterLink({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <li>
      <a
        href="#"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ ...footerLinkStyle(hovered) }}
      >
        {label}
      </a>
    </li>
  )
}

// ── FooterClient: the full site footer ───────────────────────────────────
export default function FooterClient() {
  return (
    <footer style={{ ...footerStyle }}>

      {/* Red film-strip bar at the very top of the footer */}
      <div style={{ ...filmStripStyle }} />

      <div style={{ ...footerInnerStyle }}>

        {/* Top section: brand column + four link columns */}
        <div style={{ ...footerTopRowStyle }}>

          {/* Brand: logo, tagline, social icons */}
          <div style={{ ...brandColStyle }}>
            <div style={{ ...footerLogoStyle }}>
              REEL<span style={{ ...footerLogoAccentStyle }}>ROOM</span>
            </div>
            <p style={{ ...taglineStyle }}>
              Where every film becomes a shared experience. Watch together, feel together.
            </p>
            {/* Social icon row: T=Twitter, D=Discord, I=Instagram, Y=YouTube */}
            <div style={{ ...socialRowStyle }}>
              {['T', 'D', 'I', 'Y'].map((icon) => (
                <div key={icon} style={{ ...socialIconStyle }}>{icon}</div>
              ))}
            </div>
          </div>

          {/* Link columns — one per section in footerLinks */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <div style={{ ...linkColHeadingStyle }}>{section}</div>
              <ul style={{ ...linkListStyle }}>
                {links.map((link) => (
                  <FooterLink key={link} label={link} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Gold divider line */}
        <div style={{ ...dividerStyle }} />

        {/* Bottom row: copyright + system status */}
        <div style={{ ...footerBottomRowStyle }}>
          <span style={{ ...copyrightStyle }}>© 2026 ReelRoom Inc. All rights reserved.</span>
          <div style={{ ...statusRowStyle }}>
            {/* Green dot = everything is working */}
            <div style={{ ...statusDotStyle }} />
            <span style={{ ...statusLabelStyle }}>All systems operational</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
